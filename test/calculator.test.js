const assert = require('chai').assert;
const calculator = require('../app/calculator');

describe('Calculator', function() {
	describe('add', function() {
		it('add(5, 2) should return 7', function() {
			assert.equal(calculator.add(5, 2), 7);
		});
		it('add(5, 2) should not return 8', function() {
			assert.notEqual(calculator.add(5, 2), 8);
		});
	});

	describe('sub', function() {
		it('sub(5, 2) should return 3', function() {
			assert.equal(calculator.sub(5, 2), 3);
		});
		it('sub(5, 2) should not return 5', function() {
			assert.notEqual(calculator.sub(5, 2), 5);
		});
	});

	describe('mul', function() {
		it('mul(5, 2) should return 10', function() {
			assert.equal(calculator.mul(5, 2), 10);
		});
		it('mul(5, 2) should not return 12', function() {
			assert.notEqual(calculator.mul(5, 2), 12);
		});
	});

	describe('div', function() {
		it('div(10, 2) should return 5', function() {
			assert.equal(calculator.div(10, 2), 5);
		});
		it('div(10, 2) should not return 2', function() {
			assert.notEqual(calculator.div(10, 2), 2);
		});
	});
});
