//Início função botões
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber > 0){
        currentNumberWrapper.style.color = "yellow";
    }  
}



function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if(currentNumber < 0){
        currentNumberWrapper.style.color = "#ca6567";
    }  
}
//Final da função botões

