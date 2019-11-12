<template>
  <div id="app">
    <Widget :weather="state.weather[0]"/>
  </div>
</template>

<script>
import Widget from "./components/WeatherWidget";
import { useWeatherApi } from "./functions/weather-api";

export default {
  name: "App",
  components: { Widget },
  setup() {
    const state = useWeatherApi();
    return {
      state
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  background: linear-gradient(90deg, #754d8b 0%, #4e5992 100%);
  font-size: 18px;
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: normal;
  margin: 0;
  padding: 0;
}
</style>
