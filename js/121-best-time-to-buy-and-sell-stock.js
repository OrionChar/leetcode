/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {

    let buyDay = 0
    let sellDay = null
    let profit = 0

    for (let index = 1; index < prices.length; index++) {
        const currentPrice = prices[index]
        const buyPrice = prices[buyDay]
        const sellPrice = prices[sellDay]
        
        if (sellDay === null && currentPrice > buyPrice || currentPrice > sellPrice) {
            sellDay = index
        } else if (currentPrice < buyPrice) {
            buyDay = index
            sellDay = null
        }

        if (sellDay && prices[sellDay] - prices[buyDay] > profit) {
            profit = prices[sellDay] - prices[buyDay]
        }
    }

    return profit > 0 ? profit : 0
};
