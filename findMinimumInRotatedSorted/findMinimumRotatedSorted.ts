// find Minimum Rotated number 

function findMinimuRotatedNumber(arr:number[]):number{
    let [l,r] = [0, arr.length-1]
    while (l<r){
        let m:number = Math.floor((r + l ) / 2)
        if (arr[m] > arr[r]){
            l= m+1
        }
        else {
            r = m
        }
    }
    return arr[l]
}

function findMinimum2Rotated(arr:number[]):number{
    let [left,right,res] = [0, arr.length-1, arr[0]]
    while (left < right){
        if (arr[left] < arr[right]){
            return Math.min(res, arr[left])
        }
        let mid = Math.floor((right+left) / 2)
        res = Math.min(res,arr[mid])
        if (arr[mid] > arr[left]){
            left = mid+1 
        }
        else{
            right = mid-1 
        }
    }
    return res
}

console.log(findMinimuRotatedNumber([4,5,6,0,7,8,1,2]))
console.log(findMinimuRotatedNumber([11,13,15,17]))
console.log(findMinimum2Rotated([4,5,6,7,8,1,2]))

