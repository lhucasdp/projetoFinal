<template>
  <div>
    <v-app-bar app color="black" dark>
      <img
        src="	http://overdriveconsultoria.com.br/images/logo-dark2.png"
        width="200px"
        alt="Overdrive"
      />
      <v-btn to="/" text-color="white" class="ml-16 mr-10">HOME</v-btn>
      <v-btn to="/favorite" text-color="white" class="mr-10">FAVORITE</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<style>
</style>