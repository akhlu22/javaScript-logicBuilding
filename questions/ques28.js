// progrm to cslculate the product of the two matrices.

function matrixMultiply(arr1 , arr2){

    const rowsInResult = arr1.length;
    const columnInResult = arr2[0].length;
    const rowsInSecondArr = arr2.length;
    const result = [];

    for(i=0;i<rowsInResult;i++){
        for(j=0;j<columnInResult;j++){
            let cellValue = 0;
            for(let n = 0; n< rowsInSecondArr;n++){
                cellValue = cellValue + arr1 [i] [n] * arr2 [n] [j] ;
            }
            if(!result[i]){
                result[i] = []
            }
            result [i] [j] = cellValue;
        }
    }
    return result;
}

console.log(matrixMultiply([[1,2],
                           [5,6]],
                [ [4,5],
                  [7,9]             ]));