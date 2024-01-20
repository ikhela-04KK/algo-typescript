function searchRotated(arr: number[], target: number, left: number, right: number): number {
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        console.log(`left:${left}, right:${right}, mid:${mid}, arr[${mid}]:${arr[mid]}`);

        if (arr[mid] === target) {
            console.log(`Found target at index ${mid}`);
            return mid;
        }

        if (arr[mid] >= arr[left]) {
            console.log(`Left half is sorted`);
            if (arr[left] <= target && target <= arr[mid]) {
                console.log(`Searching left half: ${left} to ${mid - 1}`);
                return searchRotated(arr, target, left, mid - 1);
            } else {
                console.log(`Searching right half: ${mid + 1} to ${right}`);
                return searchRotated(arr, target, mid + 1, right);
            }
        } else {
            console.log(`Right half is sorted`);

            if (arr[mid] <= target && target <= arr[right]) {
                console.log(`Searching right half: ${mid + 1} to ${right}`);
                return searchRotated(arr, target, mid + 1, right);
            } else {
                console.log(`Searching left half: ${left} to ${mid - 1}`);
                return searchRotated(arr, target, left, mid - 1);
            }
        }
    }

    console.log(`Target not found`);
    return -1;
}

// Exemple d'utilisation
const arr_number = [4, 5, 6, 7, 8, 9, 1, 2, 3];
const target = 6;
const result = searchRotated(arr_number, target, 0, arr_number.length)
