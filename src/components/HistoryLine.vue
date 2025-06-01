<template>
    <h2 class="text-xl font-bold mt-3 mb-1">
        <v-icon>mdi-chart-line</v-icon>
        Room Temperature History (°C)
    </h2>

  <v-card>
    <v-sparkline
      :fill="fill"
      :gradient="selectedGradient"
      :line-width="lineWidth"
      :model-value="temperatureValues"
      :padding="padding"
      :smooth="smooth"
      auto-draw
    >
    </v-sparkline>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const gradients = ['#4ED7F1', '#F0F', '#FF0']

const fill = ref(true)
const selectedGradient = ref(gradients)
const padding = ref(8)
const smooth = ref(true)
const lineWidth = ref(2)

// Example room temperature readings over time in °C
const temperatureValues = ref([25.0, 26.4, 28.5, 31.3, 28.5, 32.0, 27.1, 28.5, 25.0, 25.0, 25.7, 30.6, 26.4, 31.3, 25.0])
</script>
