<template>
  <VueJsonToTable :data="jsonData" />
</template>

<script>
import { VueJsonToTable } from './components/';
import json from "./data.json";

export default {
  name: "App",
  components: {
    VueJsonToTable
  },
  data() {
    return {
      jsonData: json
    }
  }
}
</script>