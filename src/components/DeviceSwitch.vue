<template>
    <h2 class="text-xl font-bold mb-1">
        <v-icon>mdi-devices</v-icon>
        Devices
    </h2>

    <div class="grid grid-cols-2 grid-rows-2 gap-4 justify-items-center" style="color: #B6FFFA">
        <div class="flex flex-row justify-between rounded-2xl gradient-bg-2 p-2 w-4/5">
            <div class="mx-6 mt-1">
                <img src="/light-bulb.png" alt="Light" class="w-18 h-auto"
                    :class="switchLightState ? 'filter invert-[85%] sepia-[97%] saturate-[5000%] hue-rotate-[356deg] brightness-[80%] contrast-[80%]' : ''" />

                <p class="text-center">Light bulb</p>
            </div>

            <v-switch v-model="switchLightState" color="#000957" inset></v-switch>
        </div>

        <div class="flex flex-row justify-between rounded-2xl gradient-bg-2 p-2 w-4/5">
            <div class="mx-6 mt-2">
                <img src="/television.png" alt="Light" class="w-18 h-auto"
                    :class="switchTVState ? 'filter invert-[85%] sepia-[97%] saturate-[5000%] hue-rotate-[356deg] brightness-[80%] contrast-[80%]' : ''" />

                <p class="text-center">TV</p>
            </div>

            <v-switch v-model="switchTVState" color="#000957" inset></v-switch>
        </div>

        <div class="flex flex-row justify-between rounded-2xl gradient-bg-2 p-2 w-4/5">
            <div class="mx-6 mt-2">
                <img src="/fan.png" alt="Light" class="w-18 h-auto"
                    :class="switchFanState ? 'filter invert-[85%] sepia-[97%] saturate-[5000%] hue-rotate-[356deg] brightness-[80%] contrast-[80%]' : ''" />

                <p class="text-center">Fan</p>
            </div>

            <v-switch v-model="switchFanState" color="#000957" inset></v-switch>
        </div>

        <div class="flex flex-row justify-between rounded-2xl gradient-bg-2 p-2 w-4/5">
            <div class="mx-6 mt-2">
                <img src="/air-conditioner.png" alt="Light" class="w-18 h-auto"
                    :class="switchACState ? 'filter invert-[85%] sepia-[97%] saturate-[5000%] hue-rotate-[356deg] brightness-[80%] contrast-[80%]' : ''" />

                <p class="text-center">Air Conditioner</p>
            </div>

            <v-switch v-model="switchACState" color="#000957" inset></v-switch>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const switchLightState = ref(false)
const switchTVState = ref(false)
const switchFanState = ref(false)
const switchACState = ref(false)
</script>

<style scoped>
.gradient-bg-2 {
  background-image: linear-gradient(to left,
      #80B3FF,
      #9400FF);
}
</style>