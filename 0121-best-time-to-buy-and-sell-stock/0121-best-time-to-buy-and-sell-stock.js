/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length
    let bestBuy = prices[0]
    let maxProfit = 0

    for(let i = 1; i < n; i++) {
        const price = prices[i]

        if(price > bestBuy) {
            // sell and book a profit
            maxProfit = Math.max(maxProfit, (price - bestBuy))
        } else {
            // buy the stock
            bestBuy = Math.min(bestBuy, price)
        }
    }

    return maxProfit
};