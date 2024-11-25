import { useWeatherStore } from '../stores/weatherStore';
import { getTemperature } from '../helpers/getWeather.js';

export const useWeather = async () => {
    const temperature = await getTemperature();
    const weatherStore = useWeatherStore();
    weatherStore.temperature = temperature;
}