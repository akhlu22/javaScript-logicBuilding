// Program to check the character frequency

function freq(a){
    let n = {};
    for(i=0;i<a.length;i++){
        const letter = a[i];
        if(n[letter]){
            n[letter] += 1;
        }
        else{
            n[letter] = 1;
        }
    }
    console.log(n);
}
freq("akhilg")
freq("trainToBhushan")
freq("plastic")
freq("deftsoft")