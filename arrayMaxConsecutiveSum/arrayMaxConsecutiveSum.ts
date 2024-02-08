
export function MaxConsecutiveSum(arr:number[], n:number){
    let max_arr = arr[0]; // 1
    for (let i = 0; i < arr.length-n+1; i++) { // O(n)
        let sub_arr =arr.slice(i, i+n) // O(n)
        let sum_sub_arr:number = 0 
        for (let j =0 ;  j <sub_arr.length ; j++){ // O(n)
            sum_sub_arr = sub_arr[j] + sum_sub_arr
        }
        console.log(`sub_arr ${sub_arr}  sum_sub_arr ${sum_sub_arr}`)
        if (sum_sub_arr> max_arr) { // 1
            max_arr = sum_sub_arr; //1
        }
        if (sum_sub_arr < 0) { // 1 
            sum_sub_arr = 0; // 1
        } 
    }
    return max_arr // 1
}


// Use sliding windows to iterate on the same element // with sliding the 
export function MaxConsecutive2Sum(arr:number[], n:number){
    let max_sum = 0

    for( let i =0 ; i < n ;i++){  // iterere sur les n premier éléments
        max_sum = arr[i] + max_sum
    }
    let current_sum = max_sum

    for (let i=n ; i <arr.length ; i++){
        current_sum = current_sum + arr[i] - arr[i-n]
    }

    return max_sum = Math.max(max_sum, current_sum)
}
console.log(MaxConsecutiveSum([2, -3, -5, 1,-100, 98,-97,-1,1,2,-8, -96, 100, -98] , 2))
console.log(MaxConsecutive2Sum([2, -3, -5, 1,-100, 98,-97,-1,1,2,-8, -96, 100, -98] , 2))


