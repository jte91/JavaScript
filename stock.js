//incorrect
function maxProfit(prices)
{
    let i = 0;
    let valley = prices[i];
    let peak = prices[i];
    let maxProfit = 0;
    while (i < prices.length - 1)
    {
        while(i < prices.length - 1 && prices[i] >= prices[i + 1])
        {
             i++; 
             valley = prices[i];            
        }
        while(i < prices.length - 1 && prices[i] <= prices[i + 1])
        {
            i++;
            peak = prices[i];
            maxProfit += peak - valley;
        }
        return maxProfit;
    }
}
console.log(maxProfit([7,1,5,3,6,4]));