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