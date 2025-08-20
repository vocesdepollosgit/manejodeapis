function fetchpokemon(){
fetch('https://dragonball-api.com/api/characters/3')
.then(response=>response.json())
.then(data=>displaypokemon(data))
.catch(error=> console.error('El error es', error))

}
function displaypokemon(pokemon){
    const pokemonInfo= document.getElementById('pokemon-info');
    pokemonInfo.innerHTML=`
    <p><h1>${pokemon.name}</h1></p>
    <p><h2>Peso: ${pokemon.weight} KG </h2></p>
    <p><h2>Altura: ${pokemon.height} KG </h2></p>
    <p><img src ="${pokemon.sprites.front_default}"></p>
    `;

}