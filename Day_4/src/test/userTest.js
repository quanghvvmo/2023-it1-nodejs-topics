const chai = require("chai");
const chaiHttp = require("chai-http");
const { UUID } = require("sequelize");
const server = require("../app");
const should = chai.should();
// const { User } = require("../src/models/index").models;

chai.use(chaiHttp);

describe("User API", () => {
    //const userNameTest = "testUser8";
    //let userIdCreated;


    describe("/GET /api/v1/users", () => {
        it("it should GET all usernames", (done) => {
            chai.request(server)
                .get("/users/api/v1/users")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array")
                    done();
                });
        });
    });
    describe('/GET/:username user', () => {
        it('it should GET a user by the given username', (done) => {
            
            let username = "hoang";
            chai.request(server)
                .get('/users/api/v1/user/' + username)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    //res.body.should.have.property('user');
                    done();
                });
        });
    });

    describe('/Post User', () => {
        it('it should create a new user',(done) =>{
            const user = {
                username:"abc123",
                password:"123123",
                age:18,
                email:"ok@gmail.com",
                phone:"0333804202",
                address:"ok",
                isActive:1,
                createdBy:"admin",
                updatedBy:"admin"
            }
            chai.request(server)
                .post('/users/api/v1/user')
                .send(user)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        })
    })

});