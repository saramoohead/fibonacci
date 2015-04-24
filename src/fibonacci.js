var Fibonacci = function (listSize) {
    "use strict";
    this.list = [0];
    this.listSize = listSize;
};

Fibonacci.prototype.includeNumberInArray = function (number) {
    "use strict";
    if(this.list.length < this.listSize) {
        this.list.push(number);
    }
};

Fibonacci.prototype.addSumToArray = function () {
    "use strict";
    var newNumber = (this.list[this.list.length-1] + this.list[this.list.length-2]);
    this.list.push(newNumber);
};

Fibonacci.prototype.print = function() {
    if (this.listSize > 1) {
        this.includeNumberInArray(1);
        for (var i = 0; i < (this.listSize - 2); i++) {
            this.addSumToArray();
        }
        return this.list;
    } else if (this.listSize = 1) {
        return this.list;
    } else {
        return "I can't calcuate that.";
    }

};
