import { reactive, toRefs } from "vue";

const state = reactive ({
    error : null,
    pokemons : null,
    loaded : false,
    loading : false,
    temp : null,
});

export default function usePokemons(){
    const load = async () => {
        if(!state.loaded){
            try{
                const pokemonRespons = await fetch (
                    "https://raw.githubusercontent.com/bersekerblade/Pokemon-Source-Image/main/pokemon-images/pokemon.json"
                );
                state.pokemons = await pokemonRespons.json();
                state.temp = state.pokemons;
            }
            catch(e){
                state.error = e;
            }
        }
    }

    const pencarian = (searchKey) => {
        if (searchKey){
            state.temp = state.pokemons.filter(pokemon => pokemon.Name.includes(searchKey.toLowerCase()))
        } else {
            state.temp = state.pokemons;
        }
    }

    return{ ...toRefs(state), load, pencarian }
}