
<template>
  <div>
    <h1 class="white-text">Watchlist</h1>
    <div class="listContainer">
        <WatchlistItem 
          v-for="(listItem, index) in watchlist.slice().reverse()"
          v-bind:listItem="listItem"
          v-bind:key="listItem.id"
          v-bind:index="index"
        />
    </div>
  </div>
</template>

<script>
import WatchlistItem from "../components/WatchlistItem";
export default {
  name: "Watchlist",
  components: {
    WatchlistItem,
  },
  data() {
    return {};
  },
  computed: {
    watchlist() {
      return this.$store.getters.fetchedUser.data.watchlist;
    }
  },
};
</script>

<style lang="scss" scoped>
.listContainer{
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

@media screen and (min-width: 600px) and (max-width: 767px) {
  .listContainer {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 599px) {
  .listContainer {
    grid-template-columns: 1fr;
  }
}
</style>