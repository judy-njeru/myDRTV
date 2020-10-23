<template>
  <div>
    <h3 v-if="header" class="white-text">{{header}}</h3>
    <mdb-container>
      <mdb-row class="carouselContainer" v-if="sortedMovies">
        <MediaItem
          v-for="(movie, index) in sortedMovies.slice(0,4)"
          v-bind:movie="movie"
          v-bind:key="movie.id"
          v-bind:index="index"
          v-bind:item="movie"
        />
      </mdb-row>
    </mdb-container>
  </div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";
import MediaItem from "./MediaItem";
export default {
  name: "MediaCarousel",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    MediaItem
  },
  props: ['genre','header'],
  data() {
    return {

    }
  },

  computed: {
    allMovies() {
      return this.$store.getters.fetchedMovies
    },
    sortedMovies() {
      if(this.genre == 'added') {
        const filteredMovies = this.allMovies.filter(item => item.data.date_added)
        return filteredMovies.sort((b, a) => a.data.date_added._seconds - b.data.date_added._seconds );
      }
      else if(this.genre == 'release') {
        const filteredMovies = this.allMovies.filter(item => item.data.release_year)
        return filteredMovies.sort((b, a) => a.data.release_year - b.data.release_year );
      }
      else{
        /* CASE SENSITIVE SOLUTION */
        // return this.allMovies.filter(item => item.data.genres && item.data.genres.includes(this.genre)).slice(0,4)

        /* CASE INSENSITIVE SOLUTION */
        const that = this
        return this.allMovies.filter(item => item.data.genres && item.data.genres.some(function(genre){return genre.toLowerCase() == that.genre})).slice(0,4)
      }
    },
  },
};

</script>

<style lang="css" scoped>

.carouselContainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .carouselContainer {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 599px) {
  .carouselContainer {
    grid-template-columns: 1fr;
  }
}

</style>

