import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="entry-footer" data-svelte-h="svelte-z4164y"><div class="container justify-content-end w-full"><h4 class="text-end">jjoaovitor7</h4></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="entry-header" data-svelte-h="svelte-1kr7zk9"><h1 class="entry-title text-center my-2">AjuStats</h1> <nav class="nav"><a class="mx-2 nav-link" href="${escape(base, true) + "/"}">Início</a> <a class="mx-2 nav-link" href="${escape(base, true) + "/about"}">Sobre</a></nav></header>`;
});
const styles = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="app">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
