// Program to find out the frequency of the characters in a string.

function freq(a){
    const o = {};
    for(i=0;i<a.length;i++){
        const l = a[i];
        if(o[l]){
            o[l] += 1; 
        }
        else{
            o[l] = 1;
        }
    }
    console.log(o);
}
freq("Akhil kumar");
