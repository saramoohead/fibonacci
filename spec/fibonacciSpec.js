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
        fibonacci.include_number_in_array(1);
        expect(fibonacci.list).toEqual([0, 1]);
    });

    it('knows the final two numbers in the array', function () {
        fibonacci.include_number_in_array(1);
        fibonacci.include_number_in_array(2);
        fibonacci.include_number_in_array(3);
        expect(fibonacci.last_two_numbers()).toEqual([2, 3]);
    });
});
