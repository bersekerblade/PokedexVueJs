<template>
    <div class="container">
        <AsyncPokemon v-for="(pokemon, index) in paginatedOrders" :key="index" :pokemon="pokemon" />
    </div>
    <div style="margin: 20px;">
        <!-- <button @click="loadMore" v-if="currentPage < temp.length">load more</button> -->
        <button @click="loadMore" style="margin: 10px;">Load More</button>
        <button @click="loadBefore" v-if="currentPage >= 2">Load Before</button>
    </div>

</template>

<script>
import usePokemons from '@/modules/pokemons';
import { defineAsyncComponent } from 'vue';
import Loading from '@/components/Loading.vue';



const AsyncPokemon = defineAsyncComponent({
    loader: () => import("@/components/Pokemon.vue"),
    loadingComponent : Loading,
    delay: 200,
    suspensible: false,
})

export default {
    
    components: {
        AsyncPokemon,
    },

    data() {
        return{
        currentPage: 1,
        maxPerPage: 8,
        showReadMore: true,
        }
    },

    async setup(){
        const { temp, error, load } = usePokemons();

        await load();

        return { 
            temp, 
            error, 
        }
        
    },

    
    computed: {
    totalResults() {
      return Object.keys(this.temp).length;
    },
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    pageOffest() {
      return this.maxPerPage * this.currentPage;
    },
    paginatedOrders() {
    return this.temp.slice(0, this.currentPage * this.maxPerPage);
    }
  },

  methods: {
    loadMore() {
      this.currentPage +=1 ;
    },

    loadBefore() {
      this.currentPage -=1 ;
    }
  }
}

</script>

<style scoped>
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
    }
</style>