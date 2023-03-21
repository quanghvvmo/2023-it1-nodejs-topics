const { where } = require('sequelize');
const request = require('supertest');
const app = require('../app');
const { User } = require('../models');

describe('Users Controller', () => {
    let user;

    beforeEach(async () => {
        user = await User.create({
          username: 'testuser',
          password: 'password',
          age: 30,
          email: 'testuser@example.com',
          phone: '1234567890',
          address: '123 Main St',
          isActive: true,
          createBy: new Date(),
          createAt: new Date(),
          updateAt: new Date(),
          updateBy: new Date(),
        });
    });

    afterEach(async () => {
        user.destroy({ where: {} });
    });

    describe('POST /api/v1/users', () => {
        it('should create a new user', async () => {
            const res = await request(app)
            .post('/api/v1/users')
            .send({
                username: "johnwickanhissdog",
                password: "s1@ssw0rd",
                age: 26,
                email: "johnswick@example.com",
                phone: "+1-555-123-4568",
                address: "124 Main St, Anytown, USA",
                isActive: true,
                createBy: "2023-03-20T03:30:00.000Z",
                createAt: "2023-03-20T03:30:00.000Z",
                updateAt: "2023-03-20T03:30:00.000Z",
                updateBy: "2023-03-20T03:30:00.000Z"
            });
            expect(res.statusCode).toEqual(201);
            expect(res.body).toHaveProperty('id');
            expect(res.body.username).toEqual('testuser');
            expect(res.body.password).toEqual('testpass');
        });

        it('should return a 400 error if credentials are missing', async () => {
            const res = await request(app)
            .post('/api/v1/users')
            .send({
                age: 25,
                email: 'testuser@test.com',
                phone: '1234567890',
                address: '123 Main St',
                isActive: true,
                createBy: new Date(),
                createAt: new Date(),
                updateAt: new Date(),
                updateBy: new Date()
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toEqual('Credentials cannot be empty!');
        });
  
        it('should return a 400 error if username already exists', async () => {
            await User.create({
                username: 'testuser',
                password: 'testpass',
                age: 25,
                email: 'testuser@test.com',
                phone: '1234567890',
                address: '123 Main St',
                isActive: true,
                createBy: new Date(),
                createAt: new Date(),
                updateAt: new Date(),
                updateBy: new Date()
              });
            const res = await request(app)
            .post('/api/v1/users')
            .send({
                username: 'testuser',
                password: 'testpass',
                age: 25,
                email: 'testuser@test.com',
                phone: '1234567890',
                address: '123 Main St',
                isActive: true,
                createBy: new Date(),
                createAt: new Date(),
                updateAt: new Date(),
                updateBy: new Date()
            });
            expect(res.statusCode).toEqual(400);
            expect(res.body.message).toEqual('Username already exists');
        });
    });
})