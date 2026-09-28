// function which raise the poer of a number upto given target.

function raise(n,p){
    let c=1;
    for(i=1;i<p+1;i++){
        c=c*n;
    }
    process.stdout.write(`${n},${p} : ${n}`)
    for(i=1;i<p;i++){
        process.stdout.write(`*${n}`);
    }
    process.stdout.write(` = ${c}`)
}
raise(2,3);