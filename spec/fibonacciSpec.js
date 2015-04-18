describe('Fibonacci', function () {
    it('has zero as first number in the list', function () {
        fibonacci = new Fibonacci;
        expect(fibonacci.list[0]).toBe(0);
    });

    it('can add one as second number in the list', function () {
        fibonacci = new Fibonacci;
        fibonacci.add_number(1);
        expect(fibonacci.list).toEqual([0, 1]);
    });
});
