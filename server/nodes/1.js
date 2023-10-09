

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.1c447d3a.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js","_app/immutable/chunks/singletons.2f41c5dd.js","_app/immutable/chunks/paths.79d9fdc3.js"];
export const stylesheets = [];
export const fonts = [];
