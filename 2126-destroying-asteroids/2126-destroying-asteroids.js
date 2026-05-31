/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
        const sortNums = asteroids.sort((a, b) => a - b)
    let result = mass
    
    for(let i = 0; i < asteroids.length; i++) {
      if(result < asteroids[i]) return false
      
      result += asteroids[i]
    } 
    
    return true
};