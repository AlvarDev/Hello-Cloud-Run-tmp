const app = require('./index');
const should = require('chai').should();
const request = require('supertest');
const assert = require('assert');

describe('Hello World', () => {
  it('can respond to an HTTP request', (done) => {
    console.log(`    - Requesting GET `);
    request(app)
	  .get('/')
	  .expect(200)
	  .end((e, res) => {
		  should.not.exist(e);

		assert.equal(res.status, '200');
		assert.ok(
    		  res.text.includes('Congratulations, you successfully deployed a container image to Cloud Run'),
    		);
		  done();
	  });
  });
});
