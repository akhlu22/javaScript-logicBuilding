// function which print the table of a number upto target.

function tableeOfNum(a,b){
    let c;
    for(i=1;i<b+1;i++){
        c = i*a;
        console.log(`${a}X${i}=${c}`)
    }
    console.log("\n")
}
tableeOfNum(12,10);
tableeOfNum(2,20);
tableeOfNum(12,10);
tableeOfNum(12,10);