const fetchPokemon = async() => {
    const inputPokemon = document.getElementById("pokeName");
    let pokemon = inputPokemon.value;
    pokemon = pokemon.toLowerCase();
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    fetch(pokeApi).then((res) => {
        if (res.status != 200) {
            console.log(res);
            pokeImage("./pokemon-sad.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => { 
        if (data){
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    })
}

const pokeImage = (url) =>{
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}