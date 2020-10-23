<template>
  <div class="movie-info">
    <div class="row">
      <mdb-col class="movie-description" md="6">{{movieInfo.description}}</mdb-col>
      <mdb-col md="0.5"></mdb-col>
      <mdb-col class="movie-details" md="6">
        <mdb-row>
          <mdb-col md="4" class="right-align">Cast</mdb-col>
          <mdb-col md="8">{{filteredActors}}</mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="right-align">Directors</mdb-col>
          <mdb-col md="8">{{movieInfo.directors[0]}}</mdb-col>
        </mdb-row>
        <mdb-row>
          <mdb-col md="4" class="right-align">Year</mdb-col>
          <mdb-col md="8">{{movieInfo.release_year}}</mdb-col>
        </mdb-row>
      </mdb-col>
    </div>
  </div>
</template>


<script>
import { mdbCol, mdbRow } from "mdbvue";
export default {
  name: "MovieInfo",
  components: {
    mdbCol,
    mdbRow
  },
  props: [
    'movie'
  ],
  data() {
    return {
      movieInfo: this.movie.data,
      filteredActors: ""
    };
  },
  created() {
    var actors = this.movieInfo.actors;
    var slicedActors = actors.slice(0, 3);
    slicedActors = slicedActors.join(", ");
    this.filteredActors = slicedActors;
  }
};
</script>

<style lang="scss" scoped>
div.movie-info {
  color: #fff;

  .movie-description {
    text-align: left;
    padding-left: 0px;
  }

  .right-align {
    text-align: right;
  }

  .movie-details {
    .row {
      padding-bottom: 5px;
    }
  }
}
</style>


