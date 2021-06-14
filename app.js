var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output-box");

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(text) {

    return serverURL + "?" + "text=" + text;

}




btnTranslate.addEventListener("click", function clickEventHandler() {

    // outputDiv.innerText = "TRANSLATED TEXT" + " from " + txtInput.value;

    var inputText = txtInput.value; //input text

    //server call for processing

    fetch(getTranslationURL(inputText)).then(response => response.json()).then(json => console.log(json.contents.translated)).catch(errorHandler)

})