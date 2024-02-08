

public class QuickUnion {
    private int[] id; 

    public QuickUnion(int N){
        id = new int[N]; 
        for(int i = 0 ; i < N ; i++){
            id[i] = i;  // chaque élément est ça propre route
        }
    }

    private int root(int i) {
        while (i != id[i]){
            i = id[i];  // search the root of the element 
        }
        return i;
    }

    public boolean connected(int p, int q){
        return root(p) == root(q); // check if p and q have the same root 
    }

    public void union(int p , int q){
        int i = root(p); 
        int j = root(q); 
        id[i] = j;  // change root of p to point of to root of q

        
    }
} 
