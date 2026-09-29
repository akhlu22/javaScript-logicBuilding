// program to check the pallindrome and subtrings

function pall(s){
    let result = [];
    let li ;
    let ri ;
    let n = 0;
    for(i=1;i<s.length;i++){
        n = 0;
        for(j=0;j<s.length;j++){
            n = n + 1;
            li = s[i-n];
            ri = s[i+n];
            if(li == ri){
                result.push(s.slice(i-n,i+n+1));
            }
            else{
                break;
            }
        }
    }
    const set = new Set(result);
    console.log(set);


}
pall("bradarasdmadama"); 