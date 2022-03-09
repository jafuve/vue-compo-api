import { ref } from 'vue'
import axios from 'axios'

const usePokemon = ( pokemonId = '1') => {
    // console.log(pokemonId);
    const pokemon = ref({})
    const isLoading = ref(false)
    const errorMessage = ref()

    const searchPokemon = async (id) => {

        if(!id) return

        isLoading.value = true
        pokemon.value = null

        try {
            
            const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`)
            
            pokemon.value = resp.data
            // console.log(pokemon.value, "composable")
            errorMessage.value = null
            // console.log(data)

        } catch (error) {
            errorMessage.value = "No se pudo cargar el pokemon"
        }

        isLoading.value = false

    }

    searchPokemon(pokemonId);

    return {
        errorMessage,
        isLoading,
        pokemon,

        searchPokemon
    }

}

export default usePokemon