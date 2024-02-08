
import java.util.Set;
import java.util.HashSet;

public class TwoSum{

    // intialisez le constructor 
    public static void main(String[] args){
        int[] arr = {1,7,9,10}; 
        int target = 19; 

        TwoSum somme = new TwoSum();
        int[] result = somme.SumOfTwo(arr, target);
        return result;
        

        // le reu=sult ne s'affiche pas correctement 
        // System.out.println(result);
    }
    
    public int[] SumOfTwo(int nums[] , int target){
        HashMap<Integer, Integer> prevMap = new HashMap<>();
        for (int i = 0; i < nums.length ; i++){
            int num = nums[i]; 
            int diff = target - num; 

            if (prevMap.containsKey(nums[i])){
                return new int[]{
                    prevMap.get(num), i
                };
            }
            prevMap.put(diff, i);
        }
        return new int[] {}; 
    }



}
