/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var currentCount = n;
    return function() {//inner function
        return currentCount++;
    };
};
