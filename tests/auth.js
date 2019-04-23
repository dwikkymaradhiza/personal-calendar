const supertest = require('supertest');
const app = require('../app');

const server = app.listen();
const request = supertest.agent(server);

describe('POST /auth/register', () => {
  it('should return json web token and user data', (done) => {
    const param = {
      username: 'superadmin',
      password: 'admin123',
      first_name: 'Super Admin',
      last_name: 'Admin',
      email: 'superadmin@mail.me'
    };
    request
      .post('/auth/register')
      .set('Accept', 'application/json')
      .send(param)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe('POST /auth/login', () => {
  it('should return json web token and user data', (done) => {
    const param = {
      username: 'superadmin',
      password: 'admin123'
    };
    request
      .post('/auth/login')
      .set('Accept', 'application/json')
      .send(param)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});
