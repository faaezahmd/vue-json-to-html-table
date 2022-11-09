import { openBlock, createElementBlock, normalizeProps, guardReactiveProps, renderSlot } from "vue";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("button", normalizeProps(guardReactiveProps(_ctx.$attrs)), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}
var VButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { VButton };
