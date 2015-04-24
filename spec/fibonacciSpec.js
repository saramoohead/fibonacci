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

    it('adds sum of final two numbers into list', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.addSumToArray();
        expect(fibonacci.list).toEqual([0, 1, 1]);
    });

    it('manually builds the list in the fibonacci sequece', function () {
        fibonacci.includeNumberInArray(1);
        fibonacci.addSumToArray();
        fibonacci.addSumToArray();
        fibonacci.addSumToArray();
        expect(fibonacci.list).toEqual([0, 1, 1, 2, 3]);
    });

    it('avoids infinite looping by limiting list size', function () {
        for (var i = 0; i < 5; i++) {
            fibonacci.includeNumberInArray(i+1);
        }
        expect(fibonacci.list).toEqual([0, 1, 2, 3, 4]);
    });



});
