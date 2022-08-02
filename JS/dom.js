
const fetchResturants = (countrySet) => {
    let categorySet = 7315
    let key = 'Zh7cgV0xS5hBRdNq2lZ8Pdzofe1RwL0w'
    let url = `https://api.tomtom.com/search/2/search/pizza.json?countrySet=${countrySet}&key=${key}&categorySet=${categorySet}`
    fetchData(url, (data) => {
        count.innerText = data.summary.numResults
        data.results.forEach(place => {
            renderData(place);
        })
    })
}

fetchResturants('USA')