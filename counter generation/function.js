

let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let resetButton = document.getElementById("reset");

let counterValue = document.getElementById("counter-value");


let counter = 0;
incrementButton.addEventListener('click', ()=> {
    counter = counter + 1;
    counterValue.innerText = counter;
});

decrementButton.addEventListener('click', ()=> {
    if (counter >= 1) {
        counter -= 1
        counterValue.innerText = counter;
    }
    
});

resetButton.addEventListener('click', ()=> {
    counterValue.innerText = 0;
    counter = 0;
});