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

    return (
        <>
            {pokemons.map((url,index) => <div className="pokemon"><img key={index} src={url}></img></div>)}
        </>
    )
}