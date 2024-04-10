<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref("ujj");

    async function reachWeather() {
      try {
        const response = await fetch('//api.met.no/weatherapi/locationforecast/2.0');
        const data = await response.json();
        message.value = data.svar;
      } catch (error) {
          console.error('There was an error fetching the posts ÆÆÆÆ:', error);
      };
    };


    return {
      message,
      reachWeather
    }
}};
</script>

<template>
<p>tÆÆÆst</p>
<br>
<p>{{ message }}</p>
<buttuon v-on:click="reachWeather()">reach thyne weather</buttuon>
</template>
