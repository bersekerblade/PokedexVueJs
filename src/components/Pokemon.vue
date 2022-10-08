<template>
    
    <div class="card">
        <div class="container">
            <img :src="imageLink" class="pokeImage" />
            <h4>{{ pokemon.Name }}</h4>
            <h6>{{ pokemon.Type1 }} {{ pokemon.Type2 }}</h6>
        </div>
    </div>

</template>

<script>

import { computed } from 'vue'

    export default {
        props: {
            pokemon : Object
        },
        setup(props){
            // HTTP 429 Too Many Requests, tapi bisa dilihat atau download disini
            // http://localhost/pokemon-with-images-master/pokemon-images/images/
            // https://raw.githubusercontent.com/bersekerblade/Pokemon-Source-Image/main/pokemon-images/images/
            const imageLink = computed (() => `https://raw.githubusercontent.com/bersekerblade/Pokemon-Source-Image/main/pokemon-images/images/${props.pokemon.Name}.png`);
            return{
                imageLink
            }
        }
    }
</script>

<style scoped>
    .card {
        box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.2);
        transition: 0.3s;
        margin: 2px;
        max-width: 200px;
        cursor: pointer;
    }
    .card:hover {
        box-shadow: 0 8px 16px 0 rgba( 0, 0, 0, 0.2);
    }
    .container {
        padding: 2px 16px;
    }
    .pokeImage {
        max-width: 200px;
    }

</style>