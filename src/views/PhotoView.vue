<template>
  <div class="photo">
    <section class="photo-container">
      <div class="container">
        <div class="photo-image has-text-centered">
          <div>
            <img
              v-if="photo && photo.image"
              :src="photo.image"
              :alt="photo.name || photo.caption"
            />
          </div>
          <div class="photo-caption">
            <p class="caption">{{ photo.caption }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import photos from '../data/photos'

export default {
  name: 'PhotoView',
  data() {
    return {
      photos,
      photo: {},
    }
  },
  created() {
    const ID = Number(this.$route.params.id)
    this.photo = this.photos.find((p) => p.id === ID) || { caption: '', name: '', image: '' }
  },
}
</script>

<style>
.photo {
  margin-top: 30px;
}

.here {
  margin-bottom: 70px;
}

.photo-image {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.photo-image img {
  max-width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}

.photo-container {
  display: flex;
  justify-content: center;
}

.photo-container .container {
  width: 100%;
  max-width: 900px;
  padding-left: 0;
  padding-right: 0;
}

.caption {
  margin-bottom: 30px;
}
</style>
