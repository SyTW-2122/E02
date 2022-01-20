<template>
  <div>
    <div class="container" id="Explorer">
      <b-row id="search-bar">
        <b-col>
          <div class="search-bar">
            <b-form-input
              @input="search_text()"
              v-model="search.text"
              type="text"
              placeholder="Search"
              id="input-default"
            ></b-form-input>
            <span class="search-icon">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Explore',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/sign-in');
    }
  },
};
</script>

<style scoped>
  .search-bar {
    position: relative;
  }

  .input-default {
    padding-left: 30px;
  }

  .search-icon {
    position: absolute;
    top: 8px;
    left: 8px;
  }
</style>
