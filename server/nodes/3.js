import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.e423f227.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js"];
export const stylesheets = [];
export const fonts = [];
