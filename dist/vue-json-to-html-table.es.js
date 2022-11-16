import { resolveComponent, openBlock, createElementBlock, Fragment, renderList, createElementVNode, toDisplayString, createVNode, pushScopeId, popScopeId } from "vue";
var VueJsonToHtmlTable_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = {
  name: "VueJsonToHtmlTable",
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
const _withScopeId = (n) => (pushScopeId("data-v-04d002cf"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "table-main" };
const _hoisted_2 = { class: "key p-2 d-inline-block" };
const _hoisted_3 = { class: "text-capitalize" };
const _hoisted_4 = { style: { "font-family": "monospace" } };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "value p-2 d-inline-block" };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "mx-2" }, "--", -1));
const _hoisted_9 = { key: 0 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { key: 2 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VueJsonToHtmlTable = resolveComponent("VueJsonToHtmlTable", true);
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.arrData, (row, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: "row-data m-2 d-flex"
      }, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, toDisplayString($options.keyTitle(row)) + " (" + toDisplayString($options.checkValueType($props.data[row])) + ") ", 1),
          createElementVNode("div", _hoisted_4, "key: " + toDisplayString(row), 1)
        ]),
        ["string", "number"].includes($options.checkValueType($props.data[row])) ? (openBlock(), createElementBlock("div", _hoisted_5, [
          createElementVNode("div", _hoisted_6, toDisplayString($props.data[row]), 1)
        ])) : $options.checkValueType($props.data[row]) === "array" ? (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.data[row], (arrRow, index2) => {
            return openBlock(), createElementBlock("div", {
              key: index2,
              class: "d-flex"
            }, [
              _hoisted_8,
              ["string", "number"].includes($options.checkValueType(arrRow)) ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(arrRow), 1)) : (openBlock(), createElementBlock("div", _hoisted_10, [
                createVNode(_component_VueJsonToHtmlTable, { data: arrRow }, null, 8, ["data"])
              ]))
            ]);
          }), 128))
        ])) : (openBlock(), createElementBlock("div", _hoisted_11, [
          createVNode(_component_VueJsonToHtmlTable, {
            data: $props.data[row]
          }, null, 8, ["data"])
        ]))
      ]);
    }), 128))
  ]);
}
var VueJsonToHtmlTable = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-04d002cf"]]);
export { VueJsonToHtmlTable as default };
