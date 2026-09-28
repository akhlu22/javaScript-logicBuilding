// To write a function that will give the sum of each digit of a given number

function  sumOfDigit(n){
    const m = [...String(n)].map(Number); //...string is used to convert a number into string
    let o = 0;                            //.map(Number) is used to assign the each no. iun array  
    for(i=0;i<m.length;i++){
        o += m[i];
    }
    console.log(o);   
}
sumOfDigit(400);
sumOfDigit(423432);
sumOfDigit(432432);
sumOfDigit(32423);