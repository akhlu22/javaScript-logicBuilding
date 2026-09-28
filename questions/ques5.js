// write a function which take input as a string and give output as it's reverse.

function reverse(s){
    const a = s.split("");
    let b = [];
    
    for(i=s.length-1;i>=0;i--){
        b.push(s[i]);
    }
    b = b.join("");


    console.log(b);
}
reverse("hello");
reverse("Shakalaka BoomBoom");