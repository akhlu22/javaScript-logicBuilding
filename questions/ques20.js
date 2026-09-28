// FizzBuzz
/* 
    Rules :-
    -replace multiple of 3 with fizz,
    -replace multiple of 5 with Buzz,
    -replace multiple of 5 & 3 with fizzBuzz.
    -Input - A positive number.
*/

function fizzBuzz(n){
    let a = 0;
    for(i=0;i<n;i++){
        a = a + 1;
        if(a%3==0 && a%5==0){
            console.log("FizzBuzz");
        }
        else if(a%3==0){
            console.log("Fizz");
        }
        else if(a%5==0){
            console.log("Buzz");
        }
        else{
            console.log(a);
        }
    }
}
console.log(fizzBuzz(20));
fizzBuzz(2000);