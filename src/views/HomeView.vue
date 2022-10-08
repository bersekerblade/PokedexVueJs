<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo-pokedex.png" class="logo">

    <Suspense>
      <template #default>
        <Pokemons />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>

<script>
// @ is an alias to /src
import Pokemons from "@/components/Pokemons"
import Loading from "@/components/Loading"

export default {
  name: 'homeview',
  components: {
    Pokemons,
    Loading
  }
}
</script>

<style>
  .logo{
    height: 100px;
  }
</style>