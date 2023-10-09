export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "sveltekit-github-pages/_app",
	assets: new Set([".nojekyll"]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.17dfb9c2.js","app":"_app/immutable/entry/app.303885d3.js","imports":["_app/immutable/entry/start.17dfb9c2.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/singletons.52a638dc.js","_app/immutable/chunks/paths.3c5f4e08.js","_app/immutable/entry/app.303885d3.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
