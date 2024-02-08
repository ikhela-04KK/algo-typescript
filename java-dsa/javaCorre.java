
import java.util.Scanner;
public class javaCorre {

    public static void main(String[] args)
    {
        try (// creating the instance of class Scanner
        Scanner obj = new Scanner(System.in)) {
            String name;
            float marks;

            // taking string input
            System.out.println("Enter your name");
            name = obj.nextLine();

            // taking float input
            System.out.println("Enter your marks");
            marks = obj.nextFloat();

            // printing the output
            System.out.println("Name :" + name);
            System.out.println("Marks :" + marks);

        }
    }
}

