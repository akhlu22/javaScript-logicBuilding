// Strong password checking program

function pass(p){
    const error = [];
    if(p.length<8){
        error.push("Password must of minimum 8 characters");
    }
    if(!/[A-Z]/.test(p)){
        error.push("Password must have a uppercase");
    }
    if(!/[a-z]/.test(p)){
        error.push("password must have a lowercase");
    }
    if(!/[1-9]/.test(p)){
        error.push("Password must have a digit.");
    }
    if(!/[^\w\s]/.test(p)){
        error.push("Password must have a special character in it.");
    }
    if(error.length == 0){
        return {isVlid : true , message: "Password is valid"};
    }
    else{
        return {isValid : false , errors : error};
    }
}
console.log(pass("Akhil12@gmail.com"));