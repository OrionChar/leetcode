/**
 * @param {number[]} prices
 * @return {number}
 */
export default function maxProfit(prices) {
    let buyDay = null
    let sellDay = null
    let profit = 0

    for (let index = 0; index < prices.length; index++) {
        const currentPrice = prices[index];
        const nextPrice = prices[index + 1];
        const buyPrice = prices[buyDay];
        const sellPrice = prices[sellDay];

        if (currentPrice < nextPrice && currentPrice < buyPrice || buyDay === null) {
            buyDay = index
        } else if ((currentPrice > nextPrice || !nextPrice) && currentPrice > buyPrice) {
            sellDay = index
        }
        
        if (buyDay !== null && sellDay !== null) {
            profit += prices[sellDay] - prices[buyDay]
            buyDay = sellDay = null
        }
    }

    return profit
};
