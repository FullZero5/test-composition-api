import { reactive } from "@vue/composition-api";
import axios from "axios";

export const useWeatherApi = () => {
  const state = reactive({
    weather: null,
    loading: true,
    errored: false
  });

  return state;
};
