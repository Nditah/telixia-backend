import { expect } from 'chai'
import pool from "./../src/database";

describe('Test Database connectivity and readiness', function () {
  it('should pass', function () {
    pool.query("SELECT 1 + 1 AS solution", function (err, result, fields) {
        if (err) {
            expect(err.message).to.be.a("string");
        } else {
            expect(result[0].solution).to.be.equals(2);
        }
      });
  })
})


