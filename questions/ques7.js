// write a program to check that given year is a leap year or not

function leapYear(y){
    if(y<0){
        console.log("Bhadwe year to ache se daal le");
    }
    else if(y%4==0){
        console.log(`${y} is a leap year`);
    }
    else if(y%4 != 0){
        console.log(`${y} is not a leap year`)
    }
    else{
        console.log("Unidentified input :ERROR:")
    }
}
leapYear(3098);
leapYear(2024);
leapYear(2016);
leapYear(2009);
