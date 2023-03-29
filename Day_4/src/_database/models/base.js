const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const config = require('../../config');

module.exports = class BaseModel extends Sequelize.Model {
    static tableName = '';
    static modelName = '';
    static schema = {};
    static timestamps = true;
    static include = null;

    /**
     * Initial model
     * @param {Object} sequelize Sequelize instance
     */
    static init(sequelize) {
        if (!this.tableName || !this.modelName || !Object.keys(this.schema).length) {
            throw new Error('The model name, table name and schema cannot be empty!')
        }

        return super.init({
            ...this.schema,
            createdBy: {
                type: Sequelize.STRING,
                allowNull: false
            },
             createdAt: {
                 type: Sequelize.DATE
             },
            updatedBy: {
                type: Sequelize.STRING,
                allowNull: false
            },
             updatedAt: {
                 type: Sequelize.DATE
             }
        }, {
            tableName: this.tableName,
            modelName: this.modelName,
            sequelize,
            timestamps: this.timestamps
        });
    }

    // Associations
    static associate(models) {
    }

};