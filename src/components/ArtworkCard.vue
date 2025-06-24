<script setup>
import { Artwork } from '@/models/Artwork.js';


defineProps({
  artProp: { type: Artwork, required: true }
})
</script>


<template>
  <div>
    <img :src="artProp.imgUrl" :alt="`${artProp.slug}`">
  </div>
</template>


<style lang="scss" scoped></style>