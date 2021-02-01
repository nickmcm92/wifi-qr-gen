<template>
  <div class="image-container">
    <img :src="dataURL" />
    <nav class="level">
      <div class="level-item has-text-centered">
        <b-button
          tag="a"
          :href="dataURL"
          download="qrcode.png"
          label="Download"
          type="is-link"
        />
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["dataURL"],
};
</script>

<style scoped>
div.image-container {
  max-width: 50vh;
  margin: 0 auto;
}
</style>