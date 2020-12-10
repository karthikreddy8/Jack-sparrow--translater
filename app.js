var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#text-input")
var outputDiv = document.querySelector("#output")
var serverURL ="https://api.funtranslations.com/translate/pirate.json"

function getTranslationURL(input){ 

    return serverURL + "?" + "text=" + input
}

function clickHandler(){
 var inputText = textInput.value;

 fetch (getTranslationURL(inputText))
 .then(Response => Response.json())
 .then(json=>{
     translatedText =json.contents.translated
     outputDiv.innerText=translatedText
 });
  

}
btnTranslate.addEventListener("click",clickHandler)