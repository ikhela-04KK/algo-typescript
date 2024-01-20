// Maximum Sub of array Product 

function maximumSubArrayProduct(arr:number[], n:number):number{
    let left:number[] = []
    left[0] = arr[0]
    let max_left = 0
    let max_right = 0
    let right:number[] = []
    right[n-1] = arr[n-1]


    for (let i =1 ; i< arr.length-1 ; i++){
        left[i] = left[i-1] * arr[i] 
        max_left = Math.max(left[i], max_left)
    }

    for (let i= n-2 ; i>-1 ; i-- ){
        right[i] = right[i+1] * arr[i]
        max_right =Math.max(right[i],max_right)
    }
    return Math.max(max_right, max_left)
}

function maximumSubArray2Product(arr:number[], n:number) {
    if (n <= 0) {
        return 0;
    }

    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for (let i = 1; i < n; i++) {
        if (arr[i] < 0) {
            // Échange des valeurs max et min en cas de nombre négatif
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }

        // Mettre à jour le produit maximum et minimum actuels
        maxProduct = Math.max(arr[i], maxProduct * arr[i]);
        minProduct = Math.min(arr[i], minProduct * arr[i]);

        // Mettre à jour le résultat final
        result = Math.max(result, maxProduct);
    }

    return result;
}

// Exemple d'utilisation
const arr = [2,3,0,-5,6,-1,4];
const n = arr.length;
const maxProduct = maximumSubArray2Product(arr, n);
console.log("Maximum Subarray Product:", maxProduct);
// console.log(maximumSubArrayProduct(arr, n))
// console.log(maximumSubArrayProduct(arr,n))