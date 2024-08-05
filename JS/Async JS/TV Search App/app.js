//https://api.tvmaze.com/search/shows?q=girls
const apiBaseUrl = 'https://api.tvmaze.com/search/shows?q=';

const form = document.querySelector('#searchForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const query = this.elements.query.value;
    displayShows(searchApi(query));
    this.elements.query.value = '';
})

const searchApi = async (query) => {
    try {
        const res = await axios.get(apiBaseUrl + query);
        console.log(res.data);
        displayShows(res.data);
    } catch (e) {
        console.log(e);
    }
}

const displayShows = (shows = {}) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}