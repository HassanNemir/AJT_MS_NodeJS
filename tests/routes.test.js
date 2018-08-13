const request = require('supertest');
const router = require('../index').app;
const expect = require("chai").expect;

/**
 * authentication tests
 */
describe('Authorization tests', () => {
    it('The request returns 200 status', (done) => {
        request(router).post('/login').send({
            "name": "name",
            "password": "password"
        }).expect(200).end(done);
    })
    it('The request returns 401 status as there is no JWT token', (done) => {
        request(router).post('/patch').send({
            "name": "name",
            "password": "password"
        }).expect(401).end(done);
    })
    it('The request returns 401 status as there is no JWT token', (done) => {
        request(router).post('/thumbgen').send({
            "name": "name",
            "password": "password"
        }).expect(401).end(done);
    })
})
