// implement binary search 

function binarySearch(arr:number[], target:number):number[] | number{
    let [left, right] = [0, arr.length - 1];
    while (left <= right){
        let mid = Math.floor((left + right ) / 2) 
        if (target > arr[mid]){
            left = mid + 1 
        }
        else if (target < arr[mid]){
            right = mid - 1
        }
        else{
            return [mid, arr[mid]]
        }
    }
    return -1
}
console.log(binarySearch([0,1,2,4,7,8,9,40,4], 8))