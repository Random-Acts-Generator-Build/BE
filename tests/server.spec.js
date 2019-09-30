/*
- when making a GET to the `/` endpoint 
  the API should respond with status code 200 
	and the following JSON object: `{ api: 'up' }`
	with a response type of 'application/json'.
*/
const request = require('supertest');

const server = require('../server.js');

describe('server.js', () => {
	it('should return 200 OK status code', async () => {
		const statusCode = 200;

		const response = await request(server).get('/');
		expect(response.status).toEqual(statusCode);
	})

	it('should return a JSON object from the index', async () => {
		const expectedBody = { api: 'up' };
		const res = await request(server).get('/');

		expect(res.body).toEqual(expectedBody);
	})

	it('should return a response with type application/json', async () => {
		const response = await request(server).get('/');

		expect(response.type).toEqual('application/json');
	})
});