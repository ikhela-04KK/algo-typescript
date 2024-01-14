// type containsDuplicates = {

// }

export function containsDuplicates(a: number[]){
    const set = new Set();

    for (let i = 0; i < a.length; i++) {
        if (set.has(a[i])) {
            console.log("this is a number " + a[i])
            return true
        }
       set.add(a[i])
    }
    return false

    // return !( set.size === a.length)
}

console.log(containsDuplicates([1, 2, 3, 8]));
console.log(containsDuplicates([3, 1,1]));
