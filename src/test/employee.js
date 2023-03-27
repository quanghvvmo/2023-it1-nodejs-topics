//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Employee', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    describe('/GET Employee', () => {
        it('it should GET all the employee', (done) => {
            chai.request(server)
                .get('/api/employee/list')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });

    describe('/POST Employee',  () => {
        it('it should POST (Add New) the employee', (done) => {
            const body = {
                employeeCode: "E001",
                createdBy: "admin",
                updatedBy: "admin"
            }
            chai.request(server)
                .post('/api/employee/add')
                .send(body)
                .end(function (err, res) {
                    res.should.have.status(201);
                    // E001 
                    done();
                });
        });
    });
});