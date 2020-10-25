<template>
<div>

 <h1 class="p-2 bg-primary text-light">Chore Slayer</h1>
  <div class="d-flex justify-content-end p-2 px-4">
              <button
                class="btn btn-success text-light"
                @click="login"
                v-if="!$auth.isAuthenticated"
              >Login</button>
              <button class="btn btn-danger text-light" @click="logout" v-else>logout</button>
            </div>
</div>
</template>
<script>
export default {
  name: 'Login',
 
   methods: {
    toggleBugForm() {
      this.$store.dispatch("toggleBugForm");
    },
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
      this.$store.dispatch("getProfile");
    },
    async logout() {
      this.$store.dispatch("resetBearer");
      await this.$auth.logout({ returnTo: window.location.origin });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

