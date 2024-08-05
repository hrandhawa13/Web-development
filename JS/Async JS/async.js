const loadStarWarCharacters = () => {
    loadSingleCharacter(1)
        .then(resolved => console.log(resolved))
        .catch(e => console.log(e));
    loadSingleCharacter(2)
        .then(resolved => console.log(resolved))
        .catch(e => console.log(e));
}

const loadSingleCharacter = async (id) => {
    try {
        const res = await fetch(`https://swapi.dev/api/people/${id}`);
        return await res.json();
    } catch (e) {
    }
}
