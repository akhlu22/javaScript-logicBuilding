// Function to check wheather the given string is a palindrome or not

function palindrome(a){
    a = a.toLowerCase();
   let b ="";
   for(i=-a.length;i<0;i++){
    b=a.split("").reverse().join("");
    
    
   }
   if(b===a){
   console.log(`${b} is palindrome.`);
   }
   else{
    console.log(`${a} is not a plindrome`)
   } 
}   
palindrome("akhil")
palindrome("madam")
palindrome("Madam")
palindrome("Ram")
palindrome("Level")
palindrome("level")

