<template>
  <div class="table-main">
    <div
      v-for="(row, index) in arrData"
      :key="index"
      class="row-data m-2 d-flex"
    >
      <div class="key p-2 d-inline-block">
        <div class="text-capitalize ">

          {{ keyTitle(row) }} ({{ checkValueType(data[row]) }})
        </div>
        <div style="font-family: monospace;">key: {{row}}</div>
      </div>
      <div v-if="['string', 'number'].includes(checkValueType(data[row]))">
        <div class="value p-2 d-inline-block">{{ data[row] }}</div>
      </div>
      <div v-else-if="checkValueType(data[row]) === 'array'">
        <div v-for="(arrRow, index2) in data[row]" :key="index2" class="d-flex">
          <div class="mx-2">--</div>
          <div v-if="['string', 'number'].includes(checkValueType(arrRow))">
            {{ arrRow }}
          </div>
          <div v-else>
            <Vue3JsonToHtml :data="arrRow" />
          </div>
        </div>
      </div>
      <div v-else>
        <Vue3JsonToHtml :data="data[row]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vue3JsonToHtml",
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    arrData() {
      return Object.keys(this.data);
    }
  },
  methods: {
    keyTitle(key) {
      return key.split("_").join(" ");
    },
    checkValueType(val) {
      if (typeof val !== "object") {
        return typeof val;
      }
      return Array.isArray(val) ? "array" : "object";
    }
  }
};
</script>

<style scoped>

.table-main {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.m-2 {
  margin: .5rem!important;
}

.mx-2 {
  margin-right: .5rem!important;
}

.p-2 {
  padding: .5rem!important;
}

.d-flex {
  display: flex!important;
}

.d-inline-block {
  display: inline-block!important;
}

.text-capitalize {
  text-transform: capitalize!important;
}

.key {
  background: lightgray;
}

.table-main  .row-data {
    border: 2px solid grey;
    border-radius: 2px;
  }
</style>
