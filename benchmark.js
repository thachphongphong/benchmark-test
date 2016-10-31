/**
 * Created by linhdo on 10/31/16.
 */
var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var solutions = require('./solutions.js');

suite
    .add('multLinhDo', function () {
        solutions.multLinhDo(10, 23);
        solutions.multLinhDo(20, 78);
        solutions.multLinhDo(100, 2318);
        solutions.multLinhDo(10000, 23331668);
        solutions.multLinhDo(45678, 486804150);
    }) // add listeners
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({ 'async': true });