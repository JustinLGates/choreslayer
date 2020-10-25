<template>
  <div class="home container-fluid">
    <div class="row p-0">
      <div class="col-12 p-0">
    <Login/>
      </div>
    </div>
    <div class="row">
    <HomeComponents/>
    </div>
    <AddChoreModal/>
    <AddHelperModal/>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import HomeComponents from '@/components/HomeComponents.vue'
import AddChoreModal from '@/components/AddChoreModal.vue'
import AddHelperModal from '@/components/AddHelperModal.vue'
export default {
  name: 'Home',
  components: {
    Login,
    HomeComponents,
    AddChoreModal,
    AddHelperModal
  }
}
</script>
