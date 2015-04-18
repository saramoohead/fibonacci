describe('Fibonacci', function () {
    it('has zero as first number in the list', function () {
        fibonacci = new Fibonacci;
        expect(fibonacci.list[0]).toBe(0);
    });
});
