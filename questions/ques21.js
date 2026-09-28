// program to print number pyramid

function pyramid(n){
    let l = 0;
    for(i=0;i<n;i++){
        l = l + 1;

        // for printing spaces
        for(j=0;j<(n-l);j++){
            process.stdout.write(" ");
        }
        // for printing increasing numbers
        for(j=1;j<=l;j++){
            process.stdout.write(`${j}`);
        }
        //for printing decreasinng numbers
        for(k=l-1;k>0;k--){
            process.stdout.write(`${k}`);
        }
        process.stdout.write("\n")
    }
}
pyramid(5);
pyramid(10);
pyramid(7);
pyramid(6);
