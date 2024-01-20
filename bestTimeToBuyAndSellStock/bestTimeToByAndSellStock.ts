// complexité O(n^2)
export function BestTime(arr:number[]):number{
   let max_profit = 0
   let current_profit = 0
   for (let i = 0 ; i <arr.length-1 ; i++){
      for (let j = i+1 ;  j < arr.length ; j++){
         current_profit = arr[j] - arr[i]
         if (max_profit < current_profit){
            max_profit = current_profit
         }
      }
   }
   if (max_profit > 0){
      return max_profit
   }
   return 0
}
// complexity O(n)
// aproch buy_price , profit , current_profit 

export function BestTimeBuySell(price:number[]):number{
   let profit = 0
   let buy_price = price[0]

   for (let i=0 ; i< price.length ; i++){
      if (price[i] < buy_price){
         buy_price = price[i]
      }
      else{
         let current_profit = price[i] - buy_price
         profit = Math.max(current_profit,profit)
      }
   }
   return profit	
}



console.log(BestTime([7,1,5,3,6,4]))