
function getElement(input) {
    return document.getElementById(input);
}

function createElement(input) {
    return document.createElement(input);
}

function replaceText(element, text) {
    element.innerText = text;
}

const IP = getElement('IP');
const country = getElement('country');
const city = getElement('city');
const countryCode = getElement('code');
const timeZone = getElement('zone');


const renderData = (place) => {
    let galary = getElement('galary');
    let card = createElement('div');
    card.classList.add('card');
    let cardbody = createElement('div');
    cardbody.classList.add('card-body');
    card.appendChild(cardbody);

    let frame = createElement('iframe');
    frame.src = place.poi.url;
    cardbody.appendChild(frame);

    let title = createElement('h5');
    title.classList.add('card-title');
    replaceText(title, place.poi.name);
    cardbody.appendChild(title)

    let details = createElement('p');
    details.classList.add('card-text')

    let phone = createElement('span')
    let phoneValue = createElement('a')
    phoneValue.href = `tel:${place.poi.phone}`
    replaceText(phoneValue, `Tel: ${place.poi.phone}` );
    phone.appendChild(phoneValue)
    details.appendChild(phone)

    let address = createElement('span')
    replaceText(address, place.address.freeformAddress);
    details.appendChild(address)
    cardbody.appendChild(details);

    let link = createElement('a');
    replaceText(link, 'View Site');
    link.classList.add('btn');
    link.href = '//' + place.poi.url;
    cardbody.appendChild(link);

    galary.appendChild(card);
}