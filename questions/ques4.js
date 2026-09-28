// Function which will print the smallest number among the three numbers

function smallNo(a,b,c){
    if(b==null || c==null){
        console,log("Teen no. to daal le bhadwe :-) ");
    }
    else if(a<b && a<c){
        console.log(`${a} is the smallest number among three`);
    }
    else if(b<a && b<c){
        console.log(`${b} is the smallest no. among three`)
    }
    else if(c<a && c<b){
        console.log(`${c} is the smallest number among three`)
    }
    else if(a==b && b==c){
        console.log("All three no.s are equal")
    }
    else{
        console.log("Unidentified inputs :ERROR:")
    }
}
smallNo(9,8,7);