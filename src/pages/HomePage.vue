<script setup>
import { AppState } from '@/AppState.js';
import { artworkService } from '@/services/ArtworkService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { onMounted, onUnmounted, computed } from 'vue';




const artworks = computed(() => AppState.artwork)

onMounted(() => {
  logger.log('Home Page is mounted!')
  getArtwork()
})

onUnmounted(() => {
  logger.log('Home Page is unmounted')
})


async function getArtwork() {
  try {
    await artworkService.getArtwork()
  } catch (error) {
    logger.error('COULD NOT FIND ARTWORK', error)
    Pop.error(error)
  }
}

</script>

<template>
  <h1>THIS IS SOME MIGHTY FINE ARTWORK ERE</h1>
  <section class="container">
    <div class="row">
      <div v-for="artwork in artworks" :key="artwork.id" class="col-3">
        {{ artworks }}
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss"></style>
