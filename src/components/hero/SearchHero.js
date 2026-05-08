import { ref } from "vue";

import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  components: {
    IconField,
    InputIcon,
    InputText,
    Button,
  },
  setup() {
    const searchValue = ref(null);
    return {
      searchValue,
    };
  },
};
