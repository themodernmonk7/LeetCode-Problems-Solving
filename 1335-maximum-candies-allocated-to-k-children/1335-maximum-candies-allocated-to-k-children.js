/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    const totalCandies = candies.reduce((acc, curr) => acc + curr, 0);
  
  if (totalCandies < k) return 0;

  let low = 1;
  let high = Math.floor(totalCandies / k);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let count = candies.reduce((acc, current) => acc + Math.floor(current / mid), 0);

    if (count >= k) {
      low = mid + 1; 
    } else {
      high = mid - 1; 
    }
  }
    return high
};