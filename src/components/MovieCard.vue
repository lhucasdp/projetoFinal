<template>
  <div class="testando center">
    <v-hover v-slot="{ hover }" open-delay="200">
      <v-card
        :elevation="hover ? 16 : 2"
        :class="{ 'on-hover': hover }"
        class="sizeCard"
      >
        <router-link :to="`/movie/${movie.id}`">
          <v-img v-if="movie.poster_path" :src="posterPath" class="poster">
          </v-img>
          <v-img
            v-else
            src="https://r6z996ccbi.map.azionedge.net/Custom/Content/Themes/Base/Images/sem-foto.gif"
            class="poster"
          >
          </v-img>
        </router-link>
        <v-card-title class="subtitle-2 ml-6">{{ movie.title }}</v-card-title>
        <v-card-text>
          <v-row class="mx-0 text-center">
            <div class="rey--text ml-6">
              Lançamento:
              {{ movie.release_date.split("-").reverse().join("-") }}
            </div>
          </v-row>
          <div class="my-4 subtitle-2 ml-6" v-if="movie.genre_ids.length > 0">
            <span v-for="(genre, index) in movie.genre_ids" :key="genre">
              {{ genreTypeName(genre) }}
              <span v-if="movie.genre_ids.length - 1 !== index"> |</span>
            </span>
          </div>
          <div class="my-4 subtitle-2 ml-2" v-else>
            <span> - - - - -</span>
          </div>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    genres: {
      required: true,
    },
    movie: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },
  methods: {
    genreTypeName(genraId) {
      const genres = this.genres.find((e) => {
        return e.id == genraId;
      });
      if (genres) {
        return genres.name;
      } else {
        return "*****";
      }
    },
  },
};
</script>

<style>
.poster {
  width: 250px;
  height: 350px;
  margin: 0 auto;
}

.sizeCard {
  width: 350px;
  max-height: 470px;
}
.center {
  display: flex;
  justify-content: center;
}
</style>