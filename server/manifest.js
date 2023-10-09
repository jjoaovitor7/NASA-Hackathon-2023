export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.201ff9d9.js","app":"_app/immutable/entry/app.a8ca28a9.js","imports":["_app/immutable/entry/start.201ff9d9.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/singletons.e98573d0.js","_app/immutable/chunks/paths.c9c60be4.js","_app/immutable/entry/app.a8ca28a9.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.1aad8c3d.js","_app/immutable/chunks/index.2e1bebd2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
