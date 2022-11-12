# vue-json-to-html-table

A Vue.js 3 component to transform json data in to html.

## Installation

`npm install vue-json-to-html-table`

## Usage

For vue-cli user:

```javascript
import VueJsonToHtmlTable from 'vue-json-to-html-table';
import 'vue-json-to-html-table/dist/style.css';
```

In your App.vue:
```jsx
<template>
  <div id="app">
    <VueJsonToHtmlTable :data="jsonData" />
  </div>
</template>

import VueJsonToHtmlTable from 'vue-json-to-html-table';

export default {
  components: {
    ...,
    VueJsonToHtmlTable
  }
}
```

*Important: data must be in valid json format.*

## Configuration
| Prop   |  Details |
|----------|------|
| data | Data in valid json format |