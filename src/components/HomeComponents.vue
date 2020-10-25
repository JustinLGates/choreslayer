<template>
  <div class="col-12 d-flex justify-content-center align-items-center flex-column">
    <div class="py-3">
 
    <button type="button" data-toggle="modal" data-target="#AddHelperModal" class="d-flex align-items-center">
  <h3 class="d-inline m-0 p-2">Add helper</h3>
    
     <i class="fas fa-plus px-2"></i></button>
   
    </div>
    <div class="py-3">
      <button type="button" data-toggle="modal" data-target="#AddChoreModal" class="d-flex align-items-center">
  <h3 class="d-inline m-0 p-2">Add chore</h3>
    
     <i class="fas fa-plus px-2"></i></button>
  </div>
  <div>
    <div class="m-2" v-for="helper in helpers" :key="helper.name"  ><button class="btn btn-primary text-light px-4">{{helper.name}}</button></div>
     <div class="m-2" v-for="chore in chores" :key="chore.id"  >{{chore.title}} {{chore.reward}} <button class="btn btn-danger text-light">Delete</button></div>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    helpers(){
    return this.$store.state.helpers
    },
    chores(){
      return this.$store.state.chores
    }
  },

}
</script>
<style>

</style>