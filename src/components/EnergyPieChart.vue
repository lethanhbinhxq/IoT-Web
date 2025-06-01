<template>
  <div class="max-w-[400px] mx-auto">
    <Pie :data="data" :options="options" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

// Define reactive data and options
const data = ref({
  labels: ['HVAC', 'Lighting', 'Refrigerator', 'TV', 'Other Devices'],
  datasets: [
    {
      label: 'Energy Usage (%)',
      backgroundColor: [
        '#FFA3FD',
        '#EA047E',
        '#FF6D28',
        '#FCE700',
        '#00F5FF',
      ],
      data: [35, 25, 15, 15, 10],
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
})
</script>
