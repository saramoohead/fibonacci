var Fibonacci = function () {
    "use strict";
    this.list = [0];
    this.defaultListSize = 5;
};

Fibonacci.prototype.includeNumberInArray = function (number) {
    "use strict";
    if(this.list.length < this.defaultListSize) {
        this.list.push(number);
    }
};

Fibonacci.prototype.lastTwoNumbers = function () {
    "use strict";
    return [this.list[this.list.length-1], this.list[this.list.length-2]];
};

Fibonacci.prototype.addSum = function () {
    "use strict";
    var newNumber = this.list[this.list.length-1] + this.list[this.list.length-2];
    return newNumber;
};

Fibonacci.prototype.addSumToArray = function() {

};
