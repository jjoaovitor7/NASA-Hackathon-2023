

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dc7a1c42.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js","_app/immutable/chunks/singletons.e98573d0.js","_app/immutable/chunks/paths.c9c60be4.js"];
export const stylesheets = [];
export const fonts = [];
