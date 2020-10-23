<template>
  <div class="container login-container">
    <div class="row">
      <div class="col-md-8 login-card">
        <mdb-card>
          <mdb-card-body>
            <mdb-card-title class="text-center">Please Login</mdb-card-title>
            <form class="grey-text">
              <mdb-input type="email" v-model="email" id="email" label="Your email"/>

              <mdb-input type="password" v-model="password" id="passwd" label="Your password"/>
            </form>
            <div class="text-center py-4 mt-3">
              <mdb-btn color="cyan" v-on:click="loginUser">Login</mdb-btn>
            </div>
          </mdb-card-body>
        </mdb-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbCard, mdbCardBody, mdbCardTitle, mdbBtn } from "mdbvue";

export default {
  name: "Login",
  components: { mdbBtn, mdbCard, mdbCardBody, mdbCardTitle, mdbInput },
  data() {
    return {
      email: 's@gmail.com',
      password: 'xxx'
    };
  },
  methods: {
    handleInput(val) {
      console.log(val);
    },
    
    async loginUser() {
      let payload = {
        email: this.email,
        password: this.password
      };
      await this.$store.dispatch("fetchUser", payload).then((res) => {
        // console.log('THEN')
        // console.log(res)
        if(res.data && res.id){
          this.$router.push("Home")
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
div.login-container {
  div.login-card {
    margin: 0 auto;
  }
}
</style>