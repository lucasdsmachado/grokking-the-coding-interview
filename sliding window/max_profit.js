const max_profit = function (prices) {
  let buy = prices[0], profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i])
      buy = prices[i];
    else if (prices[i] - buy > profit)
      profit = prices[i] - buy;
  }
  return profit;
};

console.log(max_profit([7, 1, 5, 3, 6, 4])); // 5
console.log(max_profit([7, 6, 4, 3, 1])); // 0
console.log(max_profit([10, 4, 11, 1, 5])); // 7