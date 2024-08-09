let inputBurpee = document.getElementById("inputBurpee");
let inputWeight = document.getElementById("inputWeight");
let res = document.getElementById("res");



function submit() {
    let inputBurpeeValue = inputBurpee.value;
    let inputWeightValue = inputWeight.value;
    let result = (inputWeightValue / 150) * 0.5 * inputBurpeeValue;
    console.log(result);

    res.innerText = result.toFixed(2) + " Calories burnt...";
}

function reload() {
    inputBurpee.value = "";
    inputWeight.value = "";
    res.innerText = "";
}