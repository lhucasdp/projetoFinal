<template>
  <div>
    <v-card flat tile class="flex black white--text text-conter text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx 4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Colocando em prática o aprendizado do curso e Google-FU. Desenvolvido
        com muita pesquisa e explosões !
        <v-divider></v-divider>
        <strong>2022 - Overdrive Software</strong>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    hoje: new Date().getMonth,
    icons: ["mdi-facebook", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style>
</style>