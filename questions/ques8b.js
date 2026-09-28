// Function which will print the biggest no. in array

function bigNo(a){
    let c=0;
for(i=0;i<a.length;i++){
    if(a[i]>c){
        c=a[i];
    }
}
console.log(c);
}

bigNo([1,2,3,4,5,6])
bigNo([12,23,12,34,56,23])
bigNo([65,6577,56,7,567])
bigNo([1,8,5,8,6,9,7,0,2])
bigNo([11,2,77,3,44,4,5,56,])