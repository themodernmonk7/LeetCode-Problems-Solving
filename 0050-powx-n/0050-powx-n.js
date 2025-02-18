/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
if (n === 0) return 1; 

    let power = Math.abs(n);
    let result = 1.0;
    let base = x;

    while (power > 0) {
        if (power % 2 === 1) {
            result *= base;
        }
        base *= base; 
        power = Math.floor(power / 2); 
    }

    return n < 0 ? 1 / result : result;
};