// function to find the all factors of a nuumber:

function factors(n){
    let fa = [];
    for(i=1;i<=n;i++){
        if(n % i ==0){
            fa.push(i);
        }
    }
    console.log(`factors of ${n} = ${fa}`);
    
}

factors(12);
factors(112);
factors(134);
factors(34);
factors(66);
factors(44);