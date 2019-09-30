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
});