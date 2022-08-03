
function getElement(input){
    return document.getElementById(input);
}

function replaceText(element, text){
    element.innerText = text;
}

const IP = getElement('IP');
const country = getElement('country');
const city = getElement('city');
const countryCode = getElement('code');
