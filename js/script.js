function fetchpokemon(){
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(response=>response.json())
.then(data=>displaypokemon(data))
.catch(error=> console.error('El error es', error))

}
function displaypokemon(pokemon){
    const pokemonInfo= document.getElementById('pokemon-info');
    pokemonInfo.innerHTML=`
    <p><h1>${pokemon.name}</h1></p>`;
}