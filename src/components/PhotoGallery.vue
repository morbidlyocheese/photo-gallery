
<template>
  <div class="gallery container">
    <div class="columns is-multiline">
      <div class="column is-one-quarter">
        <PhotoCard/>
      </div>
      <div class="column is-one-quarter">
        <PhotoCard/>
      </div>
    </div>
  </div>
</template>

<script>
  import PhotoCard from './PhotoCard.vue';
  export default {
    name: PhotoCard,
    components: {
      PhotoCard,
    },
  };
</script>

<style>
  .gallery {
    margin-top: 100px;
    text-align: center;
  }
</style>
