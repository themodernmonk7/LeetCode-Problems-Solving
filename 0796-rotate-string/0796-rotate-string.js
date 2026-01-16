/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;

    const chars = s + s;
    let pointer = 0;
    let window = "";

    for (let i = 0; i < chars.length; i++) {
        window += chars[i];


        if (window.length > goal.length) {
            window = window.slice(1);
        }

        if (window === goal) {
            return true;
        }
    }

    return false;
};