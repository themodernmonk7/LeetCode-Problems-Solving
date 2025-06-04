/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0
  let bestBuyStock = prices[0]
  const n = prices.length

  for(let i = 1; i < n; i++) {
    const price = prices[i]
    if(price > bestBuyStock) {
        maxProfit = Math.max(maxProfit, (price - bestBuyStock))
    }
    bestBuyStock = Math.min(bestBuyStock, price)
  }
  return maxProfit
};