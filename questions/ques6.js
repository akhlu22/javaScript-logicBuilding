// Function that will give the output as the factorial of the number

function facct(n){
    let b=1;
    for(i=1;i<=n;i++){
        b *= i;
    }
    console.log(b);
}
facct(9);
facct(4);