// complexity O(n^2)
// export function sumOfTwoMe(arr:number[], target:number =0){
//     for (let i = 0 ; i <arr.length -1; i++){
//         for (let j = i+1 ; j <arr.length; j++){
//             let sum_two = arr[i]+arr[j]
//             if (sum_two === target){
//                 console.log(`${i} and ${j}  the sum is ${sum_two}`)
//                 console.log(true)
//             }
//         }
//     }
// }

// complexity is O(n)
// function twoSum(nums: number[], target: number):number[] |boolean {
//     let hash: { [key: number]: number } = {};
//     for (let i = 0; i < nums.length; i++) {
//         let diff = target - nums[i];
//         if (diff in hash) {
//             return [hash[diff], i];
//         } else {
//             hash[nums[i]] = i;
//         }
//     }
//     console.log(hash)
//     return false
// }

function sumOfTwo(a:number[], b:number[],target:number):number[] | boolean{
    let hashOfa: {[key:number]:number} = {}
    for (let i = 0 ; i < b.length ; i++ ){
        hashOfa[b[i]] = i
    }
    console.log(hashOfa)

    for (let i = 0; i<a.length ; i++){
        let diff = target - a[i]
        // console.log(hashOfa[diff])
        if (hashOfa[diff]){
            console.log( [hashOfa[diff], i])
            // return [hashOfa[diff], i]
        }
    }
    return false
}
sumOfTwo([1, 2, 3],[10, 20, 30, 40], 42)

// console.log(twoSum([2,3,4,5], 4))


//  la complexité réeele depend des tailles a et b donc la complexité algorithmique est O(a + b)

// using difference syntaxe 
function sumOfTwoHas(a:number[], b:number[],target:number):number[] | boolean{
    let hashOfa: {[key:number]:number} = {}
    const setB = new Set(b); 

    for (let i = 0 ; i < a.length ;i++){
        const diff = target - a[i]
        if (setB.has(diff)){
            return [a[i], diff]
        }
    }
    return false 
}
