let fetchData = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('accept', '*/*');
    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            let data = JSON.parse(xhr.responseText);
            callback(data);
        }
    }
    xhr.send();
}

fetchData('https://api.ipify.org?format=json', (data) => {
    replaceText(IP, data.ip);
    fetchData(`http://ip-api.com/json/${data.ip}`, (locate) => {
    replaceText(country, locate.country);
    replaceText(city, locate.city);
    replaceText(countryCode, locate.countryCode);
});
});

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
