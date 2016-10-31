/**
 * Created by linhdo on 10/31/16.
 */
var should = require( 'chai' ).should();
var solutions = require( './solutions.js' );

describe('multLinhDonpm list', function() {
    it('should return 23 when passed 10', function() {
        solutions.multLinhDo(10).should.equal(23);
    })
    it('should return 78 when passed 20', function() {
        solutions.multLinhDo(20).should.equal(78);
    })
    it('should return 2318 when passed 100', function() {
        solutions.multLinhDo(100).should.equal(2318);
    })
    it('should return 23331668 when passed 10000', function() {
        solutions.multLinhDo(10000).should.equal(23331668);
    })
    it('should return 486804150 when passed 45678', function() {
        solutions.multLinhDo(45678).should.equal(486804150);
    })
})