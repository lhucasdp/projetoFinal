<template>
  <div v-if="movie" class="detalhes">
    <div class="fundoFoto">
      <div
        :style="`background-image:url('${posterPath}')`"
        v-if="movie.poster_path"
        class="poster foto"
      ></div>
      <v-img
        v-else
        src="https://r6z996ccbi.map.azionedge.net/Custom/Content/Themes/Base/Images/sem-foto.gif"
        class="poster foto"
      >
      </v-img>
      <div class="linha"></div>
    </div>
    <div class="text-center px-10">
      <h1 class="title-1 mt-16">{{ movie.title }}</h1>
      <p class="title-1">{{ movie.overview }}</p>
      <v-btn @click="addFavorite" class="botao animate-animated"
        >Adicionar Favorito</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      movie: null,
    };
  },
  name: "Movie",
  components: {},
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },
  async created() {
    try {
      const response = await this.$http.get(`/movie/${this.id}`);
      this.movie = response.data;
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    addFavorite() {
      const moviesAdd = localStorage.getItem("movie");

      let movieList = [];

      if (moviesAdd == null) {
        localStorage.setItem("movie", JSON.stringify([]));
      } else {
        movieList = JSON.parse(moviesAdd);
      }

      const existe = movieList.find((e) => {
        return e.id == this.movie.id;
      });

      if (existe) {
        alert("Já adicionado");
        return;
      }

      movieList.push({
        id: this.movie.id,
        poster: this.movie.poster_path,
        title: this.movie.title,
      });
      localStorage.setItem("movie", JSON.stringify(movieList));

      alert("Adicionado aos favoritos");
    },
  },
};
</script>

<style>
.foto {
  display: flex;

  height: 500px;
  width: 300px;
  border-radius: 10px 0 0 10px;
  background-position: bottom;
  background-size: cover;
}

.detalhes {
  display: flex;
  margin: 80px 80px 80px 80px;
  background-color: grey;
  border-radius: 10px;
  max-width: 800px;
  margin: 100px auto;
}

.fundoFoto {
  display: flex;
}

@media (max-width: 900px) {
  .detalhes {
    flex-direction: column;
    padding-bottom: 20px;
    max-width: 400px;
  }
  .foto {
    height: 540px;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
}
</style>