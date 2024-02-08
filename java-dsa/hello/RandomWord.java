package hello;
import java.util.Random;

public class RandomWord{


    public static void main (String[] args){
        String [] words = {"emincé", "emoustillé", "carrésé", "aimé", "seul"}; 
        Random random = new Random(); 
        int number_generate = random.nextInt(words.length -1); 
        System.out.println(words[number_generate]);
    }
}