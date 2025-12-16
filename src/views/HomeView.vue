
<template>
    <div class="home">
      <section class="hero is-dark">
        <!--  -->
      </section>
      <PhotoGallery/>
    </div>
</template>

  <script>
    import PhotoGallery from '../components/PhotoGallery.vue';

    export default {
      name: 'home',
      components: {
        PhotoGallery
      },
    };
  </script>
