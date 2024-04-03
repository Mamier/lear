<template>
    <div id="scene-container" ref="sceneContainer">
        <!-- Our <canvas> will be inserted here -->
    </div>
</template>

<script setup>
import { World } from '../World/World.js'
import { onMounted, ref } from 'vue'

const sceneContainer = ref(null)
var world = null

onMounted(() => {
    world = new World(sceneContainer.value)
    world.start()
})
</script>

<style scoped></style>