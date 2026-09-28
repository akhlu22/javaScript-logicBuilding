// Program to check that the given number is a armstrong number or not..

function armstrong(n) {
    let c = [];
    let d=0;
    c= String(n).split('').map(Number);

    for(i=0;i<c.length;i++){
        d= d + (c[i]**c.length);
    }
    if(d==n){
        console.log(`${n} is a armstrong number.`);
    }
    else{
        console.log(`${n} is not a armstrong number`);
    }
}
armstrong(153);
armstrong(134);
armstrong(100);
armstrong(1634);
armstrong(1000);