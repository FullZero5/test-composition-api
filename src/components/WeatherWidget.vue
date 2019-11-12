<template>
  <article class="widget">
    <div class="weatherIcon">
      <img width="50%" :src="icon" :alt="weather.weather.description">
    </div>
    <div class="weatherData">
      <h1 class="temperature">{{weather.temp}}</h1>
      <h2 class="description">{{weather.weather.description}}</h2>
      <h3 class="city">{{weather.city_name}}</h3>
    </div>
    <div class="date">
      <h4 class="month" id="month">{{month}}</h4>
      <h5 class="day" id="day">{{day}}</h5>
    </div>
  </article>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "Widget",
  props: ["weather"],
  setup({ weather }) {
    const icon = computed(() => `./icons/${weather.weather.icon}.png`);
    const month = computed(() => new Date(weather.ob_time).toLocaleString('default', { month: 'long' }));
    const day = computed(() => new Date(weather.ob_time).getDate());
    return { icon, month, day };
  }
};
</script>

<style>
.widget {
  height: 300px;
  width: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.weatherIcon {
  background-color: #f0f8fa;
  height: 70%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.weatherData {
  background-color: #2e3336;
  height: 30%;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

h1 {
  color: #c5cdcf;
  font-weight: 200;
  font-size: 2.9375em;
  line-height: 2.9375em;
  position: absolute;
  left: 6%;
  top: 50%;
  transform: translate(0, -50%);
}

h2 {
  color: #8f9b9d;
  font-weight: 200;
  font-size: 1.1875em;
  line-height: 1.1875em;
  position: absolute;
  top: 24%;
  left: 27%;
}

h3 {
  color: #c5cdcf;
  font-weight: 400;
  font-size: 0.8125em;
  line-height: 0.8125em;
  position: absolute;
  bottom: 25%;
  left: 27%;
}

h4 {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.6875em;
  line-height: 0.6875em;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 0);
}

h5 {
  color: #fff;
  font-weight: 500;
  font-size: 1.8125em;
  line-height: 28px;
  position: absolute;
  bottom: 24%;
  left: 50%;
  transform: translate(-50%, 0);
}
.description {
  margin-left: 20px;
}
.city {
  margin-left: 20px;
}
.date {
  background-color: #4dbde2;
  height: 30%;
  width: 22%;
  position: absolute;
  right: 0;
  bottom: 0;
  border-bottom-right-radius: 10px;
}
</style>

