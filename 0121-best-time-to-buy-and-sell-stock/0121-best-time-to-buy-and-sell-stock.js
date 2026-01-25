/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
 let max = 0
  let bestBuy = prices[0]
  
  for(let i = 1; i < prices.length; i++) {
    const price = prices[i]
    
    if(price > bestBuy) {
      max = Math.max(max, (price - bestBuy))
    } else {
      bestBuy = Math.min(bestBuy, price)
    }
  }
  return max

};