
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
const timeZone = getElement('zone');


const renderData = (place) => {
    let card = document.createElement('div');
    card.classList.add('card');
    let cardbody = document.createElement('div');
    cardbody.classList.add('card-body');
    card.appendChild(cardbody);

    let title = document.createElement('h5');
    title.classList.add('card-title')
    title.textContent = place.poi.name
    cardbody.appendChild(title)

    let details = document.createElement('p');
    details.classList.add('card-text')

    let phone = document.createElement('span')
    let phoneValue = document.createElement('a')
    phoneValue.href = `tel:${place.poi.phone}`
    phoneValue.innerText = 'Tel: ' + place.poi.phone;
    phone.appendChild(phoneValue)
    details.appendChild(phone)

    let address = document.createElement('span')
    address.innerText = place.address.freeformAddress;
    details.appendChild(address)


    cardbody.appendChild(details);

    let link = document.createElement('a');
    link.innerText = 'View Site';
    link.classList.add('btn');
    link.href = '/' + place.poi.url;
    cardbody.appendChild(link);

    let galary = document.querySelector('.galary');
    galary.appendChild(card);
}

