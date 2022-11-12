<template>
  <VueJsonToHtmlTable :data="jsonData" />
</template>

<script>
import { VueJsonToHtmlTable } from './components/';
import json from "./data.json";

export default {
  name: "App",
  components: {
    VueJsonToHtmlTable
  },
  data() {
    return {
      jsonData: json
    }
  }
}
</script>