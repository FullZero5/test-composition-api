import { reactive } from "@vue/composition-api";

export const useWeatherApi = () => {
  const state = reactive({
    weather: null,
    loading: true,
    errored: false
  });

  return state;
};
