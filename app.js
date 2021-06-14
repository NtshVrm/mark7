var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output-box");

btnTranslate.addEventListener("click", function clickEventHandler(){

    outputDiv.innerText = "TRANSLATED TEXT" + " from " + txtInput.value;


})