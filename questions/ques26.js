// Program to find that the given no. is a perfect number or not.

function perfect(n){
    let c = 0;
    for(i=0;i<n;i++){
        if(n%i==0){
            c = c+i;
        }
    }
    if(c==i){
        console.log(`${n} is a perfect number`);
    }
    else{
        console.log(`${n} is not a perfect number`);
    }
}
perfect(9);
perfect(6);
perfect(28);
perfect(45);
perfect(99);