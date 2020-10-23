<template>
  <div>
    <MediaCarousel class="mb-4" v-bind:genre="'release'" v-bind:header="'New Releases'"/>
    <MediaCarousel class="mb-4" v-bind:genre="'added'" v-bind:header="'Recently Added'"/>
    <SignupAd v-if="!isLoggedIn" class="mb-4"/>
    <MediaCarousel class="mb-4" v-bind:genre="'comedy'" v-bind:header="'Comedy'"/>
    <MediaCarousel class="mb-4" v-bind:genre="'action'" v-bind:header="'Action'"/>
    <MediaCarousel class="mb-4" v-bind:genre="'drama'" v-bind:header="'Drama'"/>
    <MediaCarousel class="mb-4" v-bind:genre="'adventure'" v-bind:header="'Adventure'"/>
  </div>
</template>

<script>
import MediaCarousel from "../components/Media/MediaCarousel";
import SignupAd from "../components/SignupAd";
export default {
  name: "Home",
  components: {
    MediaCarousel,
    SignupAd
  },

  created() {
    this.$store.dispatch("fetchMovies");
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  },

  methods: {
  }
};
</script>

<style  lang="scss" scoped>
h3 {
  text-align: left;
  color: #fff;
}
</style>
