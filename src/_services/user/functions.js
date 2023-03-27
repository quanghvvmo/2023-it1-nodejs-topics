const BaseService = require('../base/functions');
const User = require('../../_database/models/user');
const Employee = require('../../_database/models/employee');
const {
    Success, NotFound
} = require('../../helper/response/apiResponse');
const httpStatus = require('http-status');

class UserService extends BaseService {

    _model = User;
    _employee = Employee;

    _include = [
        {
            model: Employee,
            as: 'employee'
        }
    ]

    /**
     * Overite update function of BaseService
     */
    deleteIncludeUser = async (req, res, next) => {
        const transaction = await this._model.sequelize.transaction();
        const _include = [
            {
                model: Employee,
                as: 'employee',
                attributes: ['id', 'employeeCode'],
                where: {
                    isDeleted: 0
                },
            }
        ];
        try {
            const id = req.params.id;
            const result = await this._model.getById(id, false, false, _include);
            const retDelUser = await this._model.updateRecord({ isDeleted: 1 }, { id: req.params.id }, transaction, 'admin');
            let retDelEmployee = null;
            if (result && result.employee && result.employee.id) {
                retDelEmployee = await this._employee.updateRecord({ isDeleted: 1 }, { id: result.employee.id }, transaction, 'admin');
            }

            if (!retDelUser || !retDelEmployee) {
                transaction.rollback();
                res.status(httpStatus.NOT_FOUND);
                res.json(new NotFound('', { id }));
                return;
            }

            transaction.commit();
            res.status(httpStatus.OK);
            res.json(new Success('Data updated successfully.', null));
        } catch (err) {
            transaction.rollback();
            next(err);
        }
    };

    /**
     * add more function process
     */
    moreFunction = async (req, res, next) => {
        // do something here
        res.status(httpStatus.OK);
        res.json(new Success('More Function Responsed.', {}));
    };

    /**
     * add more function process
     */
    moreFunction2 = async (req, res, next) => {
        // do something here
        res.status(httpStatus.OK);
        res.json(new Success('More Function Two Responsed.', {}));
    };

    /**
     * add more function process
     */
    moreFunctionHaveMiddleware = async (req, res, next) => {
        // do something here
        res.status(httpStatus.OK);
        res.json(new Success('More Function Have Middleware Responsed.', {}));
    };
}

module.exports = UserService;