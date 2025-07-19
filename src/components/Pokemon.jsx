import { useEffect, useState } from "react";

export function Pokemon(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchPokeMon = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=15`);
            const data = await response.json();
            const pokemonImages =  Promise.all(data.results.map(async (pokemon) => (await(await fetch(pokemon.url)).json())));
            const images = (await pokemonImages).map(url => url.sprites.back_default);
            setPokemons(images);
        }
        fetchPokeMon();
    },[]);

    function handleRandomOrder(){
        let shuffledPokemons = [];
        let pokemonHashSet = new Set();

        while(pokemonHashSet.size < pokemons.length){
            let pokemonUrl = pokemons[Math.floor(Math.random() * pokemons.length)];

            if(!pokemonHashSet.has(pokemonUrl)){
                shuffledPokemons.push(pokemonUrl);
                pokemonHashSet.add(pokemonUrl);
            }
        }
        setPokemons(shuffledPokemons);
    }

    return (
        <div className="pokemons-container">
             {pokemons.map((url,index) => <div onClick={handleRandomOrder} className="pokemon" key={index}><img src={url}></img></div>)}
        </div>
    )
}