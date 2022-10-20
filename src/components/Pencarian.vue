<template>
    <div>
        <form @submit.prevent="cari">
            <input v-model="searchKey" type="text" placeholder="cari pokemon . . .">
        </form>
    </div>
</template>

<script>
import {ref} from 'vue'
import usePokemons from "@/modules/pokemons"

export default{
    setup(){
        const searchKey = ref(null);
        const {pencarian} = usePokemons();

        function cari(){
            pencarian(searchKey.value);
        }

        return{
            searchKey,
            cari
        }
    }
}

</script>

<style scoped>

</style>