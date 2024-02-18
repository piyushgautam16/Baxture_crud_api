const request = require('supertest');
const app = require('../server');

describe('User API', () => {
  let userId;

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        username: 'testuser',
        age: 25,
        hobbies: ['reading', 'coding']
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    userId = res.body.id;
  });

  it('should get all users', async () => {
    const res = await request(app)
      .get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should get a specific user by id', async () => {
    const res = await request(app)
      .get(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
  });

  it('should update a user by id', async () => {
    const res = await request(app)
      .put(`/api/users/${userId}`)
      .send({
        username: 'updateduser',
        age: 30,
        hobbies: ['music']
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('id', userId);
    expect(res.body).toHaveProperty('username', 'updateduser');
    expect(res.body).toHaveProperty('age', 30);
    expect(res.body).toHaveProperty('hobbies', ['music']);
  });

  it('should delete a user by id', async () => {
    const res = await request(app)
      .delete(`/api/users/${userId}`);
    expect(res.statusCode).toEqual(204);
  });
});
