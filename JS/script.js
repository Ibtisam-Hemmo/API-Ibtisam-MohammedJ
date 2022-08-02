let fetchData = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('accept', '*/*');
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4){
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