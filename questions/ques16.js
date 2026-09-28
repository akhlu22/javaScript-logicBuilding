// function to find how many words are there in a sentence

function words(a){
    let b=0;
    let c=0;
    console.log(a.length);
    for(i=0;i<a.length;i++){
        b = a[i];
        if(b == " "){
            c= c+1;
        }
    }
    console.log(`The sentense "${a}" have ${c+1} words in it!`);
}
words("Hello guys how are you");