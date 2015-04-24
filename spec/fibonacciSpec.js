"use strict";

var describe, Fibonacci, fibonacci, beforeEach, it, expect;

describe('Fibonacci', function () {
    beforeEach(function () {
        fibonacci = new Fibonacci(5);
    });

    it('takes list size from user', function () {
        expect(fibonacci.listSize).toEqual(5);
    });

    it('has zero as first number in the list', function () {
        expect(fibonacci.list[0]).toBe(0);
    });

    it('can add the next number to the list', function () {
        fibonacci.includeNumberInArray(1);
        expect(fibonacci.list).toEqual([0, 1]);
    });

    it('knows the final two numbers in the array', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.includeNumberInArray(2);
        fibonacci.includeNumberInArray(3);
        expect(fibonacci.lastTwoNumbers()).toEqual([3, 2]);
    });

    it('avoids infinite looping by limiting list size', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.includeNumberInArray(2);
        fibonacci.includeNumberInArray(3);
        fibonacci.includeNumberInArray(4);
        fibonacci.includeNumberInArray(5);
        expect(fibonacci.list).toEqual([0, 1, 2, 3, 4]);
    });

    it('adds sum of final two numbers into list', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.addSumToArray();
        expect(fibonacci.list).toEqual([0, 1, 1]);
    });

    it('builds the list in the fibonacci sequece', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.addSumToArray();
        fibonacci.addSumToArray();
        fibonacci.addSumToArray();
        expect(fibonacci.list).toEqual([0, 1, 1, 2, 3]);
    });

});
