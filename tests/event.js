const supertest = require('supertest');
const app = require('../app');

const server = app.listen();
const request = supertest.agent(server);

const id = '5cbe9f0a08a7dee6a3b9d12b';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2JlOWVlMjA4YTdkZWU2YTNiOWQxMmEiLCJ1c2VybmFtZSI6ImR3aWtreW1hcmFkaGl6YSIsImVtYWlsIjoiZHdpa2t5bWFyYWRoaXphQGdtYWlsLmNvbSIsImZpcnN0X25hbWUiOiJEd2lra3kiLCJsYXN0X25hbWUiOiJNYXJhZGhpemEiLCJjcmVhdGVkX2F0IjoiMjAxOS0wNC0yM1QwNToxMzowNi40NDNaIiwidXBkYXRlZF9hdCI6IjIwMTktMDQtMjNUMDU6MTM6MDYuNDQzWiIsIl9fdiI6MCwiaWF0IjoxNTU1OTk2Mzg2LCJleHAiOjE1NTU5OTk5ODZ9.RbJPqX0rzX5Jt07rg92tgxxS799u7E2gPXL3Il50DZs';

describe('POST /events', () => {
  it('should not be able to consume the route /events since no token was sent', (done) => {
    request
      .post('/events')
      .expect(401, done);
  });

  it('should return field created', (done) => {
    const param = {
      name: 'Birth Day',
      start_datetime: '2019-05-04 08:00:00',
      end_datetime: '2019-05-04 12:00:00',
      users_in_the_event: [],
      location: [107.123123, 6.81792]
    };

    request
      .post('/events')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(param)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe('GET /events', () => {
  it('should not be able to consume the route /events since no token was sent', (done) => {
    request
      .get('/events')
      .expect(401, done);
  });

  it('should return events data', (done) => {
    request
      .get('/events')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe(`PUT /events/${id}`, () => {
  it(`should not be able to consume the route /events/${id} since no token was sent`, (done) => {
    request
      .put(`/events/${id}`)
      .expect(401, done);
  });

  it('should return field updated', (done) => {
    const param = {
      name: 'Birth Day party',
      start_datetime: '2019-05-05 08:00:00',
      end_datetime: '2019-05-05 12:00:00',
      users_in_the_event: [],
      location: [108.123123, 6.81792]
    };
    request
      .put(`/events/${id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .send(param)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe(`GET /events/${id}`, () => {
  it(`should not be able to consume the route /events/${id} since no token was sent`, (done) => {
    request
      .get(`/events/${id}`)
      .expect(401, done);
  });

  it('should return event data', (done) => {
    request
      .get(`/events/${id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});

describe(`DELETE /events/${id}`, () => {
  it(`should not be able to consume the route /events/${id} since no token was sent`, (done) => {
    request
      .delete(`/events/${id}`)
      .expect(401, done);
  });

  it('should return deleted message', (done) => {
    request
      .delete(`/events/${id}`)
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});
