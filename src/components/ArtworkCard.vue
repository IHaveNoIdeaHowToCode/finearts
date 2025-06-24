<script setup>
import { AppState } from '@/AppState.js';
import { Artwork } from '@/models/Artwork.js';


const artwork = AppState.artwork

defineProps({
  artProp: { type: Artwork, required: true }
})
</script>


<template>
  <div>
    {{ artwork }}
  </div>
</template>


<style lang="scss" scoped></style>