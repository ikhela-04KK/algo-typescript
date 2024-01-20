# Search in Rotated Sorted Array

There is an integer array `nums` sorted in ascending order (with distinct values).

Prior to being passed to your function, `nums` is possibly rotated at an unknown pivot index `k` (1 <= k < `nums.length`) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].




Case a)
If the array size is 0 the target would not exist in the array.
If beg > end, it means that the binary search is over and the target does not exist in the array.
If array[mid] == target, we return the index of the target that has now been found in the array using binary search.

Case b)
From the example in the image it is evident that if ( array[0] <= arr[end] ), the array is already sorted. For a sorted array that has not been rotated, we use a simple binary search to find the number.

Case c)
It is also evident that ( if array[0] <= array[middle] ), the left half of the array is already sorted.
If the target lies within the sorted left-half of the array we use a simple binary search to find it.
Else we recursive call Locate (array, mid+1, end, target)

Case d)
Similarly if ( array[mid] <= array[end] ), the right half of the array is already sorted.
If the target lies within the sorted right-half of the array we use a simple binary search to find it.
Else we recursive call Locate (array, 0, mid-1, target)




























Given the array `nums` after the possible rotation and an integer `target`, return the index of `target` if it is in `nums`, or -1 if it is not in `nums`.
You must write an algorithm with O(log n) runtime complexity.

## Examples:

### Example 1:

Input: `nums = [4,5,6,7,0,1,2]`, `target = 0`

Output: `4`

### Example 2:

Input: `nums = [4,5,6,7,0,1,2]`, `target = 3`

Output: `-1`

### Example 3:

Input: `nums = [1]`, `target = 0`

Output: `-1`

## Constraints:

- 1 <= `nums.length` <= 5000
- -104 <= `nums[i]` <= 104
- All values of `nums` are unique.
- `nums` is an ascending array that is possibly rotated.
- -104 <= `target` <= 104
