let inputText = document.querySelector("textarea");

let saveButton = document.querySelector(".save");
let LoadButton = document.querySelector(".load");

saveButton.addEventListener("click",() => {
    let inputTextValue = inputText.value;
    localStorage.setItem("input",inputTextValue);
    inputText.value = "";
    
});

LoadButton.addEventListener("click",() => {
    let res = localStorage.getItem("input");
    inputText.value = res;
    console.log(res);
});