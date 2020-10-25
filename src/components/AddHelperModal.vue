<template>
<div>

<!-- Modal -->
<div class="modal fade bg-dark" id="AddHelperModal" tabindex="-1" role="dialog" aria-labelledby="AddHelperModalTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content bg-light">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Add Helper</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <h4>Name</h4>
      <input type="text" placeholder="Chris">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger text-light" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-success text-light">Add helper</button>
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