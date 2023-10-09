import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.87da8676.js","_app/immutable/chunks/2.c62ce41c.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js"];
export const stylesheets = ["_app/immutable/assets/2.d96831ea.css"];
export const fonts = [];
