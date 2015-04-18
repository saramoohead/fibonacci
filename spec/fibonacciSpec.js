"use strict";

var describe, Fibonacci, fibonacci, beforeEach, it, expect;

describe('Fibonacci', function () {
    beforeEach(function () {
        fibonacci = new Fibonacci();
    });

    it('has zero as first number in the list', function () {
        expect(fibonacci.list[0]).toBe(0);
    });

    it('can add number to the list', function () {
        fibonacci.includeNumberInArray(1);
        expect(fibonacci.list).toEqual([0, 1]);
    });

    it('knows the final two numbers in the array', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.includeNumberInArray(2);
        fibonacci.includeNumberInArray(3);
        expect(fibonacci.lastTwoNumbers()).toEqual([2, 3]);
    });

    it('avoids infinite looping by specifying a number of places to calculate to', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.includeNumberInArray(2);
        fibonacci.includeNumberInArray(3);
        fibonacci.includeNumberInArray(4);
        fibonacci.includeNumberInArray(5);
        expect(fibonacci.list).toEqual([0, 1, 2, 3, 4]);
    });

    it('has a default list size of 5', function () {
        expect(fibonacci.defaultListSize).toEqual(5);
    });

    xit('can change its list size', function () {
        expect(listSize).toEqual(6);
    });

    xit('adds sum of final two numbers to array', function () {
        fibonacci.includeNumberInArray(1);
        expect(fibonacci.list).toEqual([0, 1, 1, 2, 3]);
    });
});
