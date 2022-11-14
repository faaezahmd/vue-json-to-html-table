<template>
  <Vue3JsonToHtml :data="jsonData" />
</template>

<script>
import Vue3JsonToHtml from './components/';
import json from "./data.json";

export default {
  name: "App",
  components: {
    Vue3JsonToHtml
  },
  data() {
    return {
      jsonData: json
    }
  }
}
</script>