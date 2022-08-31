<template>
  <div>
    <v-app>
      <app-navbar />
      <v-main class="teste">
        <router-view />
      </v-main>
      <app-footer />
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import rodape from "./components/rodape.vue";

export default {
  components: {
    "app-footer": rodape,
    "app-navbar": NavBar,
  },
  name: "App",
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
.teste {
  background-color: rgb(56, 50, 50);
}
</style>