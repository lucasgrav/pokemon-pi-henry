export const filterSearchDeleted = (pokemonsSearch, setPokemonsSearch,id)=>{
    let pokemonsSearchDeleted = pokemonsSearch?.filter((pokemon) => pokemon.id.toString() !== id)
    pokemonsSearchDeleted && setPokemonsSearch(pokemonsSearchDeleted)
  }