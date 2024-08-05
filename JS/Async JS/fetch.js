fetch("https://swapi.dev/api/people/1")
    .then(res => {
        console.log("response recieved");
        return res.json();
    })
    .then(data => console.log(data))
    .catch(e => console.log("Error while fetching data", e))