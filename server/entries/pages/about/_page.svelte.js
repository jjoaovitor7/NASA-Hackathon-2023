import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1tg1fb6_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1tg1fb6_END -->`, ""} <div class="text-column" data-svelte-h="svelte-1vbgz3c"><h2 class="my-0 text-center">Sobre</h2> <p>Olá, este é um projeto que foi desenvolvido durante o Nasa International
    Space Apps Challenge (NISAC) em 48h pelo usuário <a href="https://jjoaovitor7.github.io">jjoaovitor7</a>.</p> <div class="d-flex flex-col my-2"><a class="nav-link" href="https://worldview.earthdata.nasa.gov/?v=-38.575232421875,-11.6266072265625,-35.573767578125,-10.1917927734375&s=-37.0745,-10.9092&t=2023-10-07-T13%3A02%3A31Z">World View</a> <i>https://worldview.earthdata.nasa.gov/?v=-38.575232421875,-11.6266072265625,-35.573767578125,-10.1917927734375&amp;s=-37.0745,-10.9092&amp;t=2023-10-07-T13%3A02%3A31Z</i></div> <div class="d-flex flex-col my-2"><a class="nav-link" href="https://observer.globe.gov/get-data/clouds-data">Dados retirados do GLOBE</a> <i>https://observer.globe.gov/get-data/clouds-data</i></div></div>`;
});
export {
  Page as default
};
