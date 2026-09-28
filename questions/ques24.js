// a program to check that the given two strings are anagrams or not..

function ana(a,b){
    if(a.length == b.length){
        const aa = {};
        const bb = {};
        let c;
        let d;
        for(i=0;i<a.length;i++){
            c = a[i];
            d = b[i];

            //for string a
            if(aa[c]){
                aa[c] += 1;
            }
            else{
                aa[c] = 1;
            }

            // for string b
            d = b[i];
            if(bb[d]){
                bb[d] += 1;
            }
            else{
                bb[d] = 1;
            }
        }   
        for (let key in aa){
            if(aa[key] !== bb[key]){
                return false;
            }
            return true;
        }
    }
    else{
        console.log(`'${a}' & '${b}' are not anagrams`)
    }
}
console.log("akhil lakhi", ana("akhil","lakhi"));