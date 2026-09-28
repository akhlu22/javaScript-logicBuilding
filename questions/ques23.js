// program to check that the given string is in alphabatic order or not :

function alpha(a){
    let l;
    let r;
    let err = 0;
    for(i=0;i<a.length-1;i++){
        l = a[i];
        r = a[i+1];
        if(l.charCodeAt(0) > r.charCodeAt(0)  ){
            err += 1;
        }
    }
    if(err > 0){
        console.log(`${a} : This string is not in alphabatic order`);
    }
    else{
        console.log(`${a} : This string is in alphabatic order`);
    }
}

alpha("akhil");
alpha("abcdefg");