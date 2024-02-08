public class QuickFind {
    private int[] id; 

    public QuickFind(int N){
        id = new int[N]; 
        for (int i = 0 ; i < N ; i++){
            id[i] = i ;                 //set id of each object to itself 
        }
    }

    public boolean Connected(int p , int q){  
        return id[p] == id[q]; // check whether p and q  are in the same component 
    }

    public void union(int p , int q){
        int pid = id[p];
        int qid = id[q];
        for(int i =0 ;  i < id.length ; i++){
            if (id[i] == id[pid]){
                id[i] = id[qid];  // change all entries id[p] to id[q]
            }
        }

    }
}
