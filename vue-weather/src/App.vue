<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const message = ref("ujj");

    async function reachWeather() {
      try {
        const response = await fetch('http://10.0.0.155/test');
        const data = await response.json();
        console.log(data.svar)
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
<button v-on:click="reachWeather()">reach thyne weather</button>
</template>
