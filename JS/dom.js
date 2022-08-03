
function getElement(input) {
    return document.getElementById(input);
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
    let galary = document.querySelector('.galary');

    let card = document.createElement('div');
    card.classList.add('card');
    let cardbody = document.createElement('div');
    cardbody.classList.add('card-body');
    card.appendChild(cardbody);

    let frame = document.createElement('iframe');
    frame.src = place.poi.url;
    cardbody.appendChild(frame);

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
    link.href = '//' + place.poi.url;
    cardbody.appendChild(link);

    galary.appendChild(card);
}

const fetchResturants = (countrySet, limit) => {
    let categorySet = 7315;
    let key = 'Zh7cgV0xS5hBRdNq2lZ8Pdzofe1RwL0w'
    let url = `https://api.tomtom.com/search/2/search/pizza.json?countrySet=${countrySet}&key=${key}&categorySet=${categorySet}&limit=${limit}`
    fetchData(url, (data) => {
        count.innerText = data.summary.numResults
        let galary = document.querySelector('.galary');
        galary.innerHTML = '';
        data.results.forEach(place => {
            renderData(place);
        })
    })
}
