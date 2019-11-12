import { reactive } from "@vue/composition-api";
import axios from "axios";
import { default as key } from "./key";

export const useWeatherApi = () => {
  const state = reactive({
    weather: null,
    loading: true,
    errored: false
  });
  const params = {
    key: key.APIKEY,
    city: "Краснодар",
    lang: "ru"
  };
  axios
    .get("https://api.weatherbit.io/v2.0/current", { params })
    .then(response => {
      const apiResponse = response.data;
      state.weather = apiResponse.data;
    })
    .catch(error => {
      console.log(error);
      state.errored = true;
    })
    .finally(() => (state.loading = false));
  return state;
};
