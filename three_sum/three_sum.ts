// // three sum 

// //  Using this  Brute Force containt duplicate narray O(n^3)
// //  un key dans un hash ne peut être un tableau
// // function main( arr:number[]):number[][] {
// //     let match_array:number[][] = []
// //     for (let i =0 ; i <arr.length-2 ; i++){ 
// //         for( let j = i+1 ; j < arr.length-1 ; j++){
// //             for (let k = i+2 ; k < arr.length ; k++) {
// //                 let somme =arr[i] + arr[j] + arr[k]
// //                 if (somme===0){
// //                     match_array.push([arr[i], arr[j], arr[k]])
// //                 }
// //             }; 
// //         }
// //     }
// //     return match_array
// // }

// // Using brute for containt dupplicate array O(n^2)
// function mainS(arr:number[], target:number){

//     let current_array:number[][] = []
//     for (let i=0; i < arr.length-1 ; i++){
//         const diff =target +  arr[i] + arr[i+1]
//         for (let j = 2 ; j <arr.length ; j++){
//             console.log(j, arr[j])
//             if (-diff === arr[j]){
//                 current_array.push([arr[i], arr[i+1],arr[j]])
//             }
//         }
//     }

//     // remove duplicate sum 
//     const unique_set = new Set<string>()
//     const result:number[][] =  []

//     for (const sub_array of current_array){
//         let string_set = sub_array.toString()
//         if (!unique_set.has(string_set)){
//             result.push(sub_array)

//             unique_set.add(string_set)
//             console.log(unique_set)
//         }
//     }
//     return result
// }
// console.log(mainS([-1,0,1,2,-1,-4], 0))
function mainS(arr:number[],target:number):Set<number[]> | number[]{
    let result =new Set<number[]>() 
    arr = arr.sort((a,b) => a-b)
    if (arr == null || arr.length <3 ){
        return []
    }
    for (let i = 0 ; i < arr.length -2 ; i++){
        let left = i+1
        let right = arr.length -1 
    
        // eviter les doublons dès la 1ere itération 
        while (left < right ){
            let sum = arr[i] + arr[left] +arr[right]

            if (sum === target){
                result.add([arr[i], arr[left], arr[right]])
                left ++
                right --
            }
            if (sum < target){
                left ++
            }
            else{
                right --
            }
        }
    }
    return result 
}

function find3Numbers(A:number[], sum:number) {
    // Fix the first element as A[i]
    for (let i = 0; i < A.length - 2; i++) {
      // Create a Set to store potential second elements that complement the desired sum
      const s = new Set();
   
      // Calculate the current sum needed to reach the target sum
      const currSum = sum - A[i];
   
      // Iterate through the subarray A[i+1..n-1] to find a pair with the required sum
      for (let j = i + 1; j < A.length; j++) {
        // Calculate the required value for the second element
        const requiredValue = currSum - A[j];
   
        // Check if the required value is present in the Set
        if (s.has(requiredValue)) {
          // Triplet is found; print the triplet elements
          console.log(`Triplet is ${A[i]}, ${A[j]}, ${requiredValue}`);
          return true;
        }
   
        // Add the current element to the Set for future complement checks
        s.add(A[j]);
      }
    }
   
    // If no triplet is found, return false
    return false;
  }
   
console.log(mainS([-1, 0, 1, 2, -1, -4,0,-1], 0));
console.log(find3Numbers([-1, 0, 1, 2, -1, -4,0,-1], 0));

