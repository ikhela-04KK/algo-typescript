


// multiply result[i] = multiply all left * multiply all rigtht
// n is the length of the number 
// il doit avoir un decalage qui permette de
function productOfArray(arr:number[], n:number){

    let left:number[] = []
    left[0] = 1


    let right:number[] = []
    right[n-1] = 1

    let result:number[] = []
    let k = n-1  // Pour ne atteindre la fin du tableau , ou on ne peut pas de faire de multiplication avec autre nombre 
    for( let i = 0 ; i < k ; i++){ 
        left[i+1] = arr[i] * left[i]
        console.log(`this is left ${left}`)
        right[k-(i+1)] = arr[n-i-1]  * right[k-i]  // 5-0-1 ; 5-1-1 ;  5-0-2 5-1-2 5-2-2 5-2-3    
        // (n-i-2)  , je rempliçais le tableau de rigth de  façon décroissante après le dernier élément qui était déjà présent 
        //  donc pour respecter ce faite je le remplis à partir de 3 (ex) et aussi  multiplie de arr par right[4] tout les deux decrois de telle sorte à avoir la multiplicationd de tous les éléments de gauche
        
        console.log(`this is right ${right}`)
        console.log("")
    }

    for (let i =0 ; i < n-1 ; i++){
        result[i] = left[i] * right[i]
    }
    return result 
}

productOfArray([3,4,6,1,2], [3,4,6,1,2].length)