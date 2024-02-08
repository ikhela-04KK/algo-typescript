// use Double.NEGATIVE_INFINITY pour l'infini négatif 



class FindTheNumber {

    // creer la class name à partir duquel le code s'execute 
    public static void main(String[] args){
        
        // intialise un tableau d'entier de valeur
        int [] numbers = {1,5,3,8,2};

        // Crée une nouvelle instance de la classe FindTheNumber à l'aide du constructeur par défaut et l'assigne à la variable finder
        FindTheNumber finder = new FindTheNumber(); 
        int maxNumber = finder.findMaxNumber(numbers);

        // print the result 
        System.out.println("Le nombre maximum est: " + maxNumber);

    }

    public int findMaxNumber(int[] arr){
        // find the maximum of array 
        // double max = Double.NEGATIVE_INFINITY;  
        int max = Integer.MIN_VALUE;
        for (int i=0 ;  i < arr.length ; i++ ){
            if (arr[i] > max) {
                max = arr[i] ;
            }
        }
        return max;
    }
}


