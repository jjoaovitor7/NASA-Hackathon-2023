

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.f8ff004a.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js","_app/immutable/chunks/singletons.52a638dc.js","_app/immutable/chunks/paths.3c5f4e08.js"];
export const stylesheets = [];
export const fonts = [];
