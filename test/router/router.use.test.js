var request = require('supertest');
var app = require('../../router/router.use.js');

describe('router use', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/testa')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});