//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('User', () => {
    beforeEach((done) => {
        //Before each test we empty the database in your case
        done();
    });

    describe('/GET user', () => {
        it('it should GET all the user', (done) => {
            chai.request(server)
                .get('/api/user/list')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});