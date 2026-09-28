// function to iidentify that given number is prime or not..

function prime(n){
    let err=0;
    for(i=2;i<n;i++){
        if(n % i == 0){
            err += 1 ;
        }
    }
    if(err>0){
        console.log(`${n} is not a prime no.`);
    }
    else{
        console.log(`${n} is a prime number.`)
    }
}
prime(12);
prime(13);
prime(5);
prime(7);
prime(19);
prime(57);