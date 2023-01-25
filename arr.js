//Retorna os números que são pares
function returnEvenValues(arr){
    let evenNums = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNums.push(arr[i]);
        }else{
            console.log(`${arr[i]} Não é par!`); //Mostra não é par para os números que não forem par
        }
    }

    //console.log("Os números pares são: ", evenNums); //Os números pares são:  [ 2, 4, 6, 8 ]
    console.log("Os números pares são: " + evenNums); //Os números pares são: 2,4,6,8
}

let arr = [1, 2, 4, 5, 6, 7, 8];
returnEvenValues(arr);