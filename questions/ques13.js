// Average of the set of the numbers.

function average(s){
    let c=0;
    for(i=0;i<s.length;i++){
        c += s[i];
    }
    c /= s.length;
    console.log(`The average of : ${s} = ${c}`);
}
average([12,123,3,4,32,1]);
average([12,14,16,18]);