/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0
    let bestBuy = prices[0]

    for(let i = 1; i < prices.length; i++) {
        const price = prices[i]

        if(price > bestBuy) {
            maxProfit = Math.max(maxProfit, (price - bestBuy))
        }

        bestBuy = Math.min(bestBuy, price)
    }
    return maxProfit
};