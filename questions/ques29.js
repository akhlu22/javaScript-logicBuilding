// tip calculator ..

function tip(a,t){
    let c = 0;
    let f = 0 ;
    c = (a*t)/100;
    f = c + a ;
    console.log(`The total amount is ${f}`)    
}
tip(2000,25);