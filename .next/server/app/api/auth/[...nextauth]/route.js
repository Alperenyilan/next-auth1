"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_TUF_FX505DT_Documents_GitHub_next_auth_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\TUF-FX505DT\\\\Documents\\\\GitHub\\\\next-auth\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_TUF_FX505DT_Documents_GitHub_next_auth_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNUVUYtRlg1MDVEVCU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q25leHQtYXV0aCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVFVGLUZYNTA1RFQlNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNuZXh0LWF1dGgmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tEO0FBQy9IO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLWFwcC8/YzFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxUVUYtRlg1MDVEVFxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG5leHQtYXV0aFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVFVGLUZYNTA1RFRcXFxcRG9jdW1lbnRzXFxcXEdpdEh1YlxcXFxuZXh0LWF1dGhcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.handler),\n/* harmony export */   POST: () => (/* reexport safe */ _lib_auth__WEBPACK_IMPORTED_MODULE_0__.handler)\n/* harmony export */ });\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtFO0FBRVAiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzPzAwOTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlciBhcyBuZXh0QXV0aEhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvYXV0aCc7XHJcblxyXG5leHBvcnQgeyBuZXh0QXV0aEhhbmRsZXIgYXMgR0VULCBuZXh0QXV0aEhhbmRsZXIgYXMgUE9TVCB9OyAiXSwibmFtZXMiOlsiaGFuZGxlciIsIm5leHRBdXRoSGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   handler: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"(rsc)/./node_modules/next-auth/providers/auth0.js\");\n/* harmony import */ var _next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/mongodb-adapter */ \"(rsc)/./node_modules/@next-auth/mongodb-adapter/dist/index.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.AUTH0_CLIENT_ID,\n            clientSecret: process.env.AUTH0_CLIENT_SECRET,\n            issuer: `https://${process.env.AUTH0_DOMAIN}`\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            // Her zaman MongoDB'den güncel rolü oku\n            if (user) {\n                token.id = user.id;\n                token.email = user.email;\n            }\n            if (token.email) {\n                const client = await _mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n                const db = client.db();\n                const dbUser = await db.collection(\"users\").findOne({\n                    email: token.email\n                });\n                token.role = dbUser?.role || \"user\";\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token && session.user) {\n                session.user.id = token.id;\n                session.user.role = token.role;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/login\",\n        error: \"/auth/error\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFzRDtBQUNBO0FBQ007QUFDdEI7QUFHL0IsTUFBTUksY0FBK0I7SUFDMUNDLFNBQVNILDBFQUFjQSxDQUFDQyxnREFBYUE7SUFDckNHLFdBQVc7UUFDVEwscUVBQWFBLENBQUM7WUFDWk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO1lBQ3JDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG1CQUFtQjtZQUM3Q0MsUUFBUSxDQUFDLFFBQVEsRUFBRUwsUUFBUUMsR0FBRyxDQUFDSyxZQUFZLENBQUMsQ0FBQztRQUMvQztLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO0lBQ3pCO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxLQUFJLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCLHdDQUF3QztZQUN4QyxJQUFJQSxNQUFNO2dCQUNSRCxNQUFNRSxFQUFFLEdBQUdELEtBQUtDLEVBQUU7Z0JBQ2xCRixNQUFNRyxLQUFLLEdBQUdGLEtBQUtFLEtBQUs7WUFDMUI7WUFDQSxJQUFJSCxNQUFNRyxLQUFLLEVBQUU7Z0JBQ2YsTUFBTUMsU0FBUyxNQUFNckIsZ0RBQWFBO2dCQUNsQyxNQUFNc0IsS0FBS0QsT0FBT0MsRUFBRTtnQkFDcEIsTUFBTUMsU0FBUyxNQUFNRCxHQUFHRSxVQUFVLENBQUMsU0FBU0MsT0FBTyxDQUFDO29CQUFFTCxPQUFPSCxNQUFNRyxLQUFLO2dCQUFDO2dCQUN6RUgsTUFBTVMsSUFBSSxHQUFHSCxRQUFRRyxRQUFRO1lBQy9CO1lBQ0EsT0FBT1Q7UUFDVDtRQUNBLE1BQU1MLFNBQVEsRUFBRUEsT0FBTyxFQUFFSyxLQUFLLEVBQUU7WUFDOUIsSUFBSUEsU0FBU0wsUUFBUU0sSUFBSSxFQUFFO2dCQUN4Qk4sUUFBUU0sSUFBSSxDQUFvQ0MsRUFBRSxHQUFHRixNQUFNRSxFQUFFO2dCQUM3RFAsUUFBUU0sSUFBSSxDQUFvQ1EsSUFBSSxHQUFHVCxNQUFNUyxJQUFJO1lBQ3BFO1lBQ0EsT0FBT2Q7UUFDVDtJQUNGO0lBQ0FlLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQUMsUUFBUXpCLFFBQVFDLEdBQUcsQ0FBQ3lCLGVBQWU7QUFDckMsRUFBRTtBQUVLLE1BQU1DLFVBQVVuQyxnREFBUUEsQ0FBQ0ksYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1hcHAvLi9zcmMvbGliL2F1dGgudHM/NjY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IEF1dGgwUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9hdXRoMCc7XHJcbmltcG9ydCB7IE1vbmdvREJBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9tb25nb2RiLWFkYXB0ZXInO1xyXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tICcuL21vbmdvZGInO1xyXG5pbXBvcnQgeyBBZGFwdGVyVXNlciB9IGZyb20gJ25leHQtYXV0aC9hZGFwdGVycyc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEF1dGgwUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuQVVUSDBfQ0xJRU5UX0lEISxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIMF9DTElFTlRfU0VDUkVUISxcclxuICAgICAgaXNzdWVyOiBgaHR0cHM6Ly8ke3Byb2Nlc3MuZW52LkFVVEgwX0RPTUFJTn1gLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBzZXNzaW9uOiB7XHJcbiAgICBzdHJhdGVneTogJ2p3dCcsXHJcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBnw7xuXHJcbiAgfSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgLy8gSGVyIHphbWFuIE1vbmdvREInZGVuIGfDvG5jZWwgcm9sw7wgb2t1XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xyXG4gICAgICAgIHRva2VuLmVtYWlsID0gdXNlci5lbWFpbDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodG9rZW4uZW1haWwpIHtcclxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgZGIuY29sbGVjdGlvbigndXNlcnMnKS5maW5kT25lKHsgZW1haWw6IHRva2VuLmVtYWlsIH0pO1xyXG4gICAgICAgIHRva2VuLnJvbGUgPSBkYlVzZXI/LnJvbGUgfHwgJ3VzZXInO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xyXG4gICAgICBpZiAodG9rZW4gJiYgc2Vzc2lvbi51c2VyKSB7XHJcbiAgICAgICAgKHNlc3Npb24udXNlciBhcyB7IGlkPzogc3RyaW5nOyByb2xlPzogc3RyaW5nIH0pLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xyXG4gICAgICAgIChzZXNzaW9uLnVzZXIgYXMgeyBpZD86IHN0cmluZzsgcm9sZT86IHN0cmluZyB9KS5yb2xlID0gdG9rZW4ucm9sZSBhcyBzdHJpbmc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFnZXM6IHtcclxuICAgIHNpZ25JbjogJy9hdXRoL2xvZ2luJyxcclxuICAgIGVycm9yOiAnL2F1dGgvZXJyb3InLFxyXG4gIH0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTsgIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQXV0aDBQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiY2xpZW50UHJvbWlzZSIsImF1dGhPcHRpb25zIiwiYWRhcHRlciIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkFVVEgwX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkFVVEgwX0NMSUVOVF9TRUNSRVQiLCJpc3N1ZXIiLCJBVVRIMF9ET01BSU4iLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJpZCIsImVtYWlsIiwiY2xpZW50IiwiZGIiLCJkYlVzZXIiLCJjb2xsZWN0aW9uIiwiZmluZE9uZSIsInJvbGUiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"MONGODB_URI environment variable must be defined\");\n}\nif (true) {\n    // @ts-ignore\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        // @ts-ignore\n        global._mongoClientPromise = client.connect();\n    }\n    // @ts-ignore\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLE1BQU1DLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUksQ0FBQ0wsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsSUFBSU4sSUFBeUIsRUFBZTtJQUMxQyxhQUFhO0lBQ2IsSUFBSSxDQUFDTyxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQkosU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUIsYUFBYTtRQUNiSSxPQUFPQyxtQkFBbUIsR0FBR0osT0FBT0ssT0FBTztJQUM3QztJQUNBLGFBQWE7SUFDYkosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUdOO0FBRUQsaUVBQWVILGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWF1dGgtYXBwLy4vc3JjL2xpYi9tb25nb2RiLnRzPzUzYzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJITtcclxuY29uc3Qgb3B0aW9ucyA9IHt9O1xyXG5cclxubGV0IGNsaWVudDtcclxubGV0IGNsaWVudFByb21pc2U6IFByb21pc2U8TW9uZ29DbGllbnQ+O1xyXG5cclxuaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gIHRocm93IG5ldyBFcnJvcignTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgbXVzdCBiZSBkZWZpbmVkJyk7XHJcbn1cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gIC8vIEB0cy1pZ25vcmVcclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIC8vIEB0cy1pZ25vcmVcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZTtcclxufSBlbHNlIHtcclxuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZTsgIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwidXJpIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJFcnJvciIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();