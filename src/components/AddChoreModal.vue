<template>
<div>
<!-- Modal -->
<div class="modal fade bg-dark" id="AddChoreModal" tabindex="-1" role="dialog" aria-labelledby="AddChoreModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-light">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add chore</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5 class="m-0 p-0 pt-2">Title</h5>
        <input type="text" placeholder="Dishes">
        <h5 class="m-0 p-0 pt-2">Description</h5>
        <input type="text" placeholder="Unload and load the dishwasher">
        <h5 class="m-0 p-0 pt-2">Reward</h5>
        <input type="text " placeholder="1.25">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger text-light" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success text-light">Add Chore</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  
  }
</script>

<style>

</style>