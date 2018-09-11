var Operations = require('../app.js');

describe('Operations tests', function() {
    var operation = new Operations();

    describe('Sum tests', function() {
        it('should return 4 as result of 2 + 2', function () {
            expect(4).toEqual(operation.sum(2,2));
        });

        it('should return 10 as result of -10 + 20', function () {
            expect(10).toEqual(operation.sum(-10, 20));
        });

        it('should return 2 as result of -1 + (-1)', function () {
            expect(-2).toEqual(operation.sum(-1,-1));
        })
    });

    describe('Sub tests', function () {
        it('should return 0 as result of substraction of two numbers equals', function () {
            expect(0).toEqual(operation.sub(10, 10));
        });

        it('should return a sub of negative numbers', function() {
            expect(0).toEqual(operation.sub(-2,-2));
        });
    });

    describe('Multiply test', function() {
        it('should return the multiplication of two positive numbers', function() {
            expect(25).toEqual(operation.multiply(5,5));
        });

        it('should return the multiplication of a positive and a negative number', function() {
            expect(-25).toEqual(operation.multiply(-5,5));
        });

        it('should return the multiplication of two negative numbers', function() {
            expect(25).toEqual(operation.multiply(-5,-5));
        });
    });

    describe('Division tests', function() {
        it('should return the division of two positive numbers', function () {
            expect(1).toEqual(operation.divide(10,10));
        });

        it('should return the division of two negative numbers', function () {
            expect(1).toEqual(operation.divide(-10,-10));
        });

        it('should return the division of a positive number and a negative number', function () {
            expect(-1).toEqual(operation.divide(-10,10));
        });
    })
});

var test = new Operations();