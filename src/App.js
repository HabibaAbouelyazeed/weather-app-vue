import SplitButton from "primevue/splitbutton";
import SearchHero from "./components/hero/SearchHero.vue";
import TodayBanner from "./components/weather/TodayBanner/TodayBanner.vue";
import WeatherConditions from "./components/weather/WeatherConditions/WeatherConditions.vue";
import DailyForecast from "./components/weather/DailyForecast/DailyForecast.vue";
import HourlyForecast from "./components/weather/HourlyForecast/HourlyForecast.vue";

export default {
  components: {
    SplitButton,
    SearchHero,
    TodayBanner,
    WeatherConditions,
    DailyForecast,
    HourlyForecast,
  },
  setup() {
    const items = [
      {
        label: "Celsius",
        command: () => {},
      },
      {
        label: "Fahrenheit",
        command: () => {},
      },
    ];
    return {
      items,
    };
  },
};
