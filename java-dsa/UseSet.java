import java.util.Set;
import java.util.HashSet;

public class UseSet {

    // ! je n'arrive pas utilisé les set en java 
    // ! je n'arrive pas à manipuler les hashSet en java 
    // ! et je ne comprend pas trop les compilations avec les noms
    // ! quelles sont les conventions les plus respectés 

    public  int[] sumOfTwoHas(int[] arr, int target){
        Set<Integer> setB = new HashSet<>();
        
        for (int i=0 ; i < arr.length ; i++){
            int diff = target - arr[i]; 
            if (setB.contains(diff)){
                return new int[] {arr[i] , diff};
            }
        }
        return new int[] {}; 
    }

    public static void main(String[] args){

    }
}
