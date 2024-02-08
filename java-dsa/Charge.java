// implement all future for class 

public class Charge{

    // instance variable 
    private final double rx, ry; // a quoi sert final et private ici 
    private final double q;

    // constructor 
    public Charge(double x0, double y0, double q0){
        rx = x0; ry = y0; q = q0;
    }

    // instace the methode 
    public double potentialAt(double x ,double y){
        double k = 8.99e09;
        double dx = x - rx; 
        double dy = y - ry;
        return k * q / Math.sqrt(dx*dx + dy*dy); 
    }

    // instance another method 
    public String toString(){
        return q + " at " + "(" + rx + ", "+ ry + ")"; 
    }

    // test in real word 
    public static void main(String[] args){
        double x = Double.parseDouble(args[0]); 
        double y = Double.parseDouble(args[1]); 

        // invoque construtor 
        // create and initialize object
        Charge c1 = new Charge(0.51, 0.63, 21.3); 
        Charge c2 = new Charge(0.13, 0.94, 81.9); 

        double v1 = c1.potentialAt(x, y);
        double v2 = c2.potentialAt(x, y);

        System.out.printf("%.2e\n", (v1 + v2));

    }
}
