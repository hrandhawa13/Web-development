axios.get('https://swapi.dev/api/people/1')
    .then(res => console.log(res))
    .catch(e => console.log(e));

const getStarWarCharacter = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (e) {
        console.log(e)
    }
}
const dadJokeSpan = document.querySelector('span');
const getDadJoke = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    console.log(res.data.joke);
    dadJokeSpan.innerText = res.data.joke;
}
const dadJokeBtn = document.querySelector('button');
dadJokeBtn.addEventListener('click', getDadJoke);
getStarWarCharacter(5);



getDadJoke();