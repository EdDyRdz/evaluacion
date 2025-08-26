const request = require('supertest');
const app = require('../backend/app');

describe('GET /', () => {
  it('should return 200 and status ok', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');

  });
});
