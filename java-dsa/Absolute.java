public class Absolute {
    

    // function main 
    public static void main(String[] args){
        int  numbers = -5;
        int abs = calculAbsolute(numbers); 
        System.out.println("La valeur absolue est: " + abs);
    }

    //  write a fonction 
    public static int calculAbsolute(int nums){
        if (nums < 0) return -nums;
        else      return nums;

    } 
}
