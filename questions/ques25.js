// Traversing a matrix (a matrix is basically a multidimentional array.)

function travaerse(m){
    
    let r = [];
    let nr = m.length;
    let nc = m[0].length;
    
    for(let i=0;i<nr;i++){
        for(let j=0;j<nc;j++){
            if (!r[j]) {
                r[j] = [];
            }
            r[j][i] = m[i][j];
            
        }
        
    }
    
    console.log(r)
}

const a = [[1,2,3],[4,5,6],[7,8,9]];
travaerse(a);