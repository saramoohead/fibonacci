var Fibonacci = function () {
    "use strict";
    this.list = [0];
};

Fibonacci.prototype.include_number_in_array = function (number) {
    "use strict";
    this.list.push(number);
};

Fibonacci.prototype.last_two_numbers = function () {
    "use strict";
    var last_number = this.list[this.list.length-1];
    var second_to_last_number = this.list[this.list.length-2];
    return [second_to_last_number, last_number];
};
