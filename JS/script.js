let fetchData = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('accept', '*/*');
    xhr.onreadystatechange = () => {
        if (xhr.status === 200) {
            if (xhr.readyState === 4) {
                let data = JSON.parse(xhr.responseText);
                callback(data);
            } else console.log('error');
        }
    }
    xhr.send();
}

fetchData('https://api.ipify.org/?format=json', (data) => {
    replaceText(IP, data.ip);

    fetchData(`http://ip-api.com/json/${data.ip}`, (locate) => {
        replaceText(country, locate.country);
        replaceText(city, locate.city);
        replaceText(countryCode, locate.countryCode);
        replaceText(timeZone, locate.timezone);

        const latlng = new google.maps.LatLng(locate.lat, locate.lon); //Set the default location of map
        const map = new google.maps.Map(getElement('map'), {
            center: latlng,
            zoom: 11, //The zoom value for map
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Place the marker for your location!', //The title on hover to display
            draggable: true //this makes it drag and drop
        });
        fetchResturants(locate.countryCode, 50, () => {
            spineer.style.transform= 'translateX(100%)'
        })
    });
});

rangeLimit.oninput = (e) => {
    rangeValue.innerText = (e.target.value);
    fetchResturants(code.textContent, e.target.value)
}