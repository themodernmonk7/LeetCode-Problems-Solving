/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (let ast of asteroids) {
    let alive = true;

    while (
      alive &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      ast < 0
    ) {
      const top = stack[stack.length - 1];

      if (Math.abs(top) < Math.abs(ast)) {
        stack.pop(); // top destroyed
      } else if (Math.abs(top) > Math.abs(ast)) {
        alive = false; // current destroyed
      } else {
        stack.pop();   // both destroyed
        alive = false;
      }
    }

    if (alive) {
      stack.push(ast);
    }
  }

  return stack;
};
