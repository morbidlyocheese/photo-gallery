<template>
  <div class="photo-card">
    <div class="card">
      <img v-if="photo.image" class="card-img" :src="photo.image" :alt="photo.caption" />
      <div class="card-content">
        <router-link :to="'/photo/' + photo.id">
          <p class="title">{{ photo.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoCard',
  props: ['photo'],
}
</script>

<style>
.card {
  position: relative;
  height: 200px;
  text-align: center;
  overflow: hidden;
}

.card-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45));
  padding: 0.75rem;
}
</style>
