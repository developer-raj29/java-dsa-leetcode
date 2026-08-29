class Solution {
    public int maxProfit(int[] prices) {
        int maxProfit = 0;
        int buyPrice = Integer.MAX_VALUE;

        for(int price : prices ){
            if(price < buyPrice){
                buyPrice = price;
            }
            if(price - buyPrice > maxProfit){
                maxProfit = price - buyPrice;
            }
        }
        return maxProfit;
    }
}