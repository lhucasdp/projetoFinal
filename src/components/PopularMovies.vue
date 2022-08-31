<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Popular Movies</h2>
    <v-container fluid>
      <v-row>
        <v-col v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" :genres="genres" />
        </v-col>
      </v-row>
    </v-container>

    <div class="text-center">
      <v-pagination
        :value="page"
        @input="atualizaPagina"
        :length="200"
        total-visible="6"
        circle
        class="mt-10 mb-4"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import MovieCard from "../components/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data: function () {
    return {
      totalPages: null,
      page: 1,
      movies: [],
      genres: [],
    };
  },
  async created() {
    try {
      this.listarFilme();
      this.getGenre();
    } catch (error) {
      //fecha TRY
      console.log(error);
    }
  },
  methods: {
    async getGenre() {
      try {
        const response = await this.$http.get("/genre/movie/list");
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
    async listarFilme() {
      let n = 0;
      let pa = 0;
      if (this.page == 1) {
        pa = 1;
      } else if (this.page % 2 == 0) {
        n = this.page / 2;
        pa = 3 + (n - 1) * 5;
      } else {
        n = (this.page + 1) / 2;
        pa = 1 + (n - 1) * 5;
      }
      for (let page = pa; page <= pa + 2; page++) {
        const response = await this.$http.get("/discover/movie", {
          params: { page: page, sort_by: "primary_release_date.desc" },
        });
        this.totalPages = response.data.total_pages;
        this.movies.push(...response.data.results);
      }

      if (this.page % 2 == 0) {
        this.movies.splice(0, 10);
      } else if (this.page % 2 == 1) {
        this.movies.splice(50, 60);
      }
      console.log(this.movies);
    },
    atualizaPagina(page) {
      this.page = page;
      this.movies = [];
      this.listarFilme();
    },
  },
};
</script>
