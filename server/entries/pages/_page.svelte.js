import { c as create_ssr_component, e as escape, b as each, o as onDestroy, v as validate_component, d as add_attribute } from "../../chunks/ssr.js";
const Circle_svelte_svelte_type_style_lang = "";
const Circle2_svelte_svelte_type_style_lang = "";
const Circle3_svelte_svelte_type_style_lang = "";
const range = (size, startAt = 0) => [...Array(size).keys()].map((i) => i + startAt);
const DoubleBounce_svelte_svelte_type_style_lang = "";
const GoogleSpin_svelte_svelte_type_style_lang = "";
const ScaleOut_svelte_svelte_type_style_lang = "";
const SpinLine_svelte_svelte_type_style_lang = "";
const Stretch_svelte_svelte_type_style_lang = "";
const BarLoader_svelte_svelte_type_style_lang = "";
const Jumper_svelte_svelte_type_style_lang = "";
const RingLoader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-kxapcj{position:relative;width:var(--size);height:var(--size)}.border.svelte-kxapcj{border-color:var(--color);position:absolute;top:0px;left:0px;width:var(--size);height:var(--size);opacity:0.4;perspective:800px;border-width:6px;border-style:solid;border-image:initial;border-radius:100%}.border.\\31 .svelte-kxapcj{animation:var(--duration) linear 0s infinite normal none running svelte-kxapcj-ringOne}.border.\\32 .svelte-kxapcj{animation:var(--duration) linear 0s infinite normal none running svelte-kxapcj-ringTwo}.pause-animation.svelte-kxapcj{animation-play-state:paused}@keyframes svelte-kxapcj-ringOne{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(360deg) rotateY(180deg) rotateZ(360deg)}}@keyframes svelte-kxapcj-ringTwo{0%{transform:rotateX(0deg) rotateY(0deg) rotateZ(0deg)}100%{transform:rotateX(180deg) rotateY(360deg) rotateZ(360deg)}}",
  map: null
};
const RingLoader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "2s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css$1);
  return `<div class="wrapper svelte-kxapcj" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(2, 1), (version) => {
    return `<div class="${[
      "border " + escape(version, true) + " svelte-kxapcj",
      pause ? "pause-animation" : ""
    ].join(" ").trim()}"></div>`;
  })} </div>`;
});
const SyncLoader_svelte_svelte_type_style_lang = "";
const Rainbow_svelte_svelte_type_style_lang = "";
const Firework_svelte_svelte_type_style_lang = "";
const Pulse_svelte_svelte_type_style_lang = "";
const Jellyfish_svelte_svelte_type_style_lang = "";
const Chasing_svelte_svelte_type_style_lang = "";
const Square_svelte_svelte_type_style_lang = "";
const Shadow_svelte_svelte_type_style_lang = "";
const Moon_svelte_svelte_type_style_lang = "";
const Plane_svelte_svelte_type_style_lang = "";
const Diamonds_svelte_svelte_type_style_lang = "";
const Clock_svelte_svelte_type_style_lang = "";
const Wave_svelte_svelte_type_style_lang = "";
const Puff_svelte_svelte_type_style_lang = "";
const ArrowDown_svelte_svelte_type_style_lang = "";
const ArrowUp_svelte_svelte_type_style_lang = "";
const LeafletMap_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "leaflet/dist/leaflet.css";@import "leaflet.markercluster/dist/MarkerCluster.css";@import "leaflet.markercluster/dist/MarkerCluster.Default.css";#leaflet-map.svelte-1wyb1ib{min-height:1024px;border-radius:2rem;filter:blur(4px);transition:all 1.6s}#btn-resetview.svelte-1wyb1ib{border:none;padding:4px 16px;color:#000;font-size:0.8rem;border-radius:0.4rem;transition:all 256ms;transform-origin:center;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25),\r\n      inset 0px -2px 4px rgba(0, 0, 0, 0.25)}#btn-resetview.svelte-1wyb1ib:hover{cursor:pointer;transform:scale(0.975);box-shadow:0px 2px 4px rgba(0, 0, 0, 0.25)}',
  map: null
};
const LeafletMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let map;
  let { data } = $$props;
  onDestroy(async () => {
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<section class="position-relative"><div id="loader" class="center position-absolute">${validate_component(RingLoader, "RingLoader").$$render($$result, { color: "#000", size: 128 }, {}, {})}</div> <div class="d-flex justify-content-end"><button id="btn-resetview" class="my-2 svelte-1wyb1ib" data-svelte-h="svelte-1qrg7lq">Resetar visão</button></div> <div id="leaflet-map" class="svelte-1wyb1ib"><div${add_attribute("this", map, 0)}></div></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-29gkij_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="AjuStats"><!-- HEAD_svelte-29gkij_END -->`, ""} <div class="container">${validate_component(LeafletMap, "LeafletMap").$$render($$result, { data }, {}, {})}</div>`;
});
export {
  Page as default
};
