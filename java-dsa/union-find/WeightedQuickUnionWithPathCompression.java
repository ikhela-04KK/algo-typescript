public class WeightedQuickUnionWithPathCompression {
    private int[] id; 
    private int[] sz;
    private int count;

    public WeightedQuickUnionWithPathCompression(int N){
        id = new int[N]; 
        sz = new int[N]; // Initialisation du tableau sz
        count = N;
        for(int i = 0 ; i < N ; i++){
            id[i] = i;  // Chaque élément est sa propre racine
            sz[i] = 1;  // Initialisez chaque taille à 1
        }
    }

    private int root(int i) {
        while (i != id[i]){
            id[i] = id[id[i]];  // Compression de chemin
            i = id[i];
        }
        return i;
    }

    public int count(){
        return count;
    }

    public boolean connected(int p, int q){
        return root(p) == root(q); // Vérifiez si p et q ont la même racine 
    }

    public void union(int p , int q){
        int i = root(p); 
        int j = root(q); 

        if (i == j) return; 

        if (sz[i] < sz[j]){
            id[i] = j; 
            sz[j] += sz[i]; 
        }
        else{
            id[j] = i; 
            sz[i] += sz[j];
        }
        count--;
    }
}
