import { reactive } from "@vue/composition-api";
import axios from "axios";

export const useWeatherApi = () => {
  const state = reactive({
    weather: null,
    loading: true,
    errored: false
  });
  const params = {
    access_key: "YOUR_ACCESS_KEY",
    query: "New York"
  };
  axios
    .get("https://api.weatherstack.com/current", { params })
    .then(response => {
      const apiResponse = response.data;
      state.weather = apiResponse;
      console.log(
        `Current temperature in ${apiResponse.location.name} is ${
          apiResponse.current.temperature
        }℃`
      );
    })
    .catch(error => {
      console.log(error);
      state.errored = true;
    })
    .finally(() => (state.loading = false));
  return state;
};
