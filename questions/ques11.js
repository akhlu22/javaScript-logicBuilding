// function that will count the number of vowels and consonents.

function identify(s){
    s=s.toLowerCase();
    let v=0;
    let c=0;
    const vowels = ["a","e","i","o","u"];
    for(i=0;i<s.length;i++){
        if(vowels.includes(s[i])){
            v += 1;
        }
        else{
            c += 1;
        }
    }
    console.log(`Vowels = ${v}  &  Consonents = ${c}`)
}
identify("hello");
identify("akhil");
identify("India");
identify("RamRam");
identify("Narachi");
identify("patanhi");
