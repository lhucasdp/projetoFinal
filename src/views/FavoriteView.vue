<template>
  <div>
    <div class="favorites text-center">
      <v-container fluid>
        <div v-for="(movie, index) in movieList" :key="index">
          <h3 class="titulo">
            {{ movie.title }}
          </h3>
          <div class="estilizar">
            <div v-if="movie.poster">
              <img
                :src="`https://image.tmdb.org/t/p/w500${movie.poster}`"
                class="item"
              />
            </div>
            <div v-else>
              <div>
                <img
                  src="https://r6z996ccbi.map.azionedge.net/Custom/Content/Themes/Base/Images/sem-foto.gif"
                  class="item2"
                />
              </div>
            </div>
            <div class="botao">
              <v-btn @click="remover(index)">REMOVER</v-btn>
            </div>
          </div>

          <v-divider></v-divider>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Favorite",
  components: {},
  data() {
    return {
      movieList: [],
    };
  },
  created() {
    const moviesAdd = localStorage.getItem("movie");
    if (moviesAdd == null) {
      this.movieList = [];
    } else {
      this.movieList = JSON.parse(moviesAdd);
    }
  },
  methods: {
    remover(index) {
      const confirm = window.confirm("Remover?");
      if (confirm == false) {
        return;
      }

      this.movieList.splice(index, 1);
      localStorage.setItem("movie", JSON.stringify(this.movieList));
    },
  },
};
</script>


<style>
.item {
  height: 335px;
  margin-bottom: 5px;
}
.item2 {
  max-width: 215px;
  height: 335px;
  margin-bottom: 5px;
}
.favorites {
  background-color: grey;
  max-width: 255px;
}
.estilizar {
  padding-bottom: 10px;
}
.titulo {
  background-color: rgb(78, 75, 75);
  margin-top: 10px;
}

@media (max-width: 500px) {
  .favorites {
    flex-direction: column;
    padding-bottom: 20px;
    max-width: 255px;
  }
}
</style>