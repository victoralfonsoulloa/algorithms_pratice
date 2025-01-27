// Imagine you are buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high only once. 

// Here's what you're given: 
// A list of stock prices for each day [7, 1, 5, 3, 6, 4]
// Here's what you need to find: The difference betwween the cheapest price you could have bought the stock and the most expensive price you could have sold it later. 


// We need to loop through the array and get the difference between every number. I'm going to keep in a variable the numbers that return the highest difference between the both of them. 

function maxProfit (array) {
    let price1 = 0;
    let price2 = 0;
    let maxProfit = 0;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < (array.length); j++) {
            const profit = array[j] - array[i];
            if (profit > maxProfit) {
                price1 = array[i];
                price2 = array[j];
                maxProfit = profit;
            }
        }
    }
    console.log(`Buying Price: ${price1}, Selling Price: ${price2}, Profit: ${maxProfit}} `);
}

// maxProfit([7, 1, 5, 3, 6, 4]);

// Another approach
const maxProfit2 = prices => {
    let minPrice = prices[0] // 7
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]; // 1
        minPrice = Math.min(minPrice, currentPrice); 
        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
    }

    return maxProfit;
}

// console.log(maxProfit2([2, 1, 5, 3, 6, 6]));

//Another approach

const maxProfit3 = (prices) => {
    let minPrice = prices[0];
    let maxProfit = 0;
    let buyPrice = prices[0];
    let sellPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        
        if (currentPrice < minPrice) {
            minPrice = currentPrice; // Update the minimum price
            buyPrice = currentPrice; // Update the buying price
        }
        
        const potentialProfit = currentPrice - minPrice;
        if (potentialProfit > maxProfit) {
            maxProfit = potentialProfit;
            sellPrice = currentPrice; // Update the selling price
        }
    }

    console.log(`Buying Price: ${buyPrice}, Selling Price: ${sellPrice}, Profit: ${maxProfit}`);
    return maxProfit;
};

console.log(maxProfit3([7, 1, 5, 3, 6, 4]));