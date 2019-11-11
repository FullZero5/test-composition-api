import { reactive } from "@vue/composition-api";
import axios from "axios";

export const useWeatherApi = () => {
  const state = reactive({
    weather: null,
    loading: true,
    errored: false
  });
  const params = {
    access_key: "2039c4a50788281dd9c3c2e3d8384d24",
    query: "New York"
  };
  axios
    .get("http://api.weatherstack.com/current", { params })
    .then(response => {
      const apiResponse = response.data;
      state.weather = apiResponse;
      console.log(apiResponse);
    })
    .catch(error => {
      console.log(error);
      state.errored = true;
    })
    .finally(() => (state.loading = false));
  return state;
};
