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
exports.id = "app/api/admin/users/route";
exports.ids = ["app/api/admin/users/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_TUF_FX505DT_Documents_GitHub_next_auth_src_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/admin/users/route.ts */ \"(rsc)/./src/app/api/admin/users/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/admin/users/route\",\n        pathname: \"/api/admin/users\",\n        filename: \"route\",\n        bundlePath: \"app/api/admin/users/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\TUF-FX505DT\\\\Documents\\\\GitHub\\\\next-auth\\\\src\\\\app\\\\api\\\\admin\\\\users\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_TUF_FX505DT_Documents_GitHub_next_auth_src_app_api_admin_users_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/admin/users/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhZG1pbiUyRnVzZXJzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYWRtaW4lMkZ1c2VycyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNUVUYtRlg1MDVEVCU1Q0RvY3VtZW50cyU1Q0dpdEh1YiU1Q25leHQtYXV0aCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVFVGLUZYNTA1RFQlNUNEb2N1bWVudHMlNUNHaXRIdWIlNUNuZXh0LWF1dGgmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hdXRoLWFwcC8/YmQyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxUVUYtRlg1MDVEVFxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG5leHQtYXV0aFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hZG1pbi91c2Vyc1wiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxUVUYtRlg1MDVEVFxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXG5leHQtYXV0aFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhZG1pblxcXFx1c2Vyc1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYWRtaW4vdXNlcnMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/admin/users/route.ts":
/*!******************************************!*\
  !*** ./src/app/api/admin/users/route.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PATCH: () => (/* binding */ PATCH)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n\n\n\n// Kullanıcı listesini döner\nasync function GET(req) {\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n        req,\n        secret: process.env.NEXTAUTH_SECRET\n    });\n    if (!token || token.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Yetkisiz\"\n        }, {\n            status: 401\n        });\n    }\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    const db = client.db();\n    // Sadece gerekli alanları döndür\n    const users = await db.collection(\"users\").find({}, {\n        projection: {\n            email: 1,\n            name: 1,\n            role: 1,\n            image: 1\n        }\n    }).toArray();\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(users);\n}\n// Kullanıcı rolünü günceller (email ile)\nasync function PATCH(req) {\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.getToken)({\n        req,\n        secret: process.env.NEXTAUTH_SECRET\n    });\n    if (!token || token.role !== \"admin\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Yetkisiz\"\n        }, {\n            status: 401\n        });\n    }\n    const { email, roleName } = await req.json();\n    const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    const db = client.db();\n    await db.collection(\"users\").updateOne({\n        email: email\n    }, {\n        $set: {\n            role: roleName\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: true\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hZG1pbi91c2Vycy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDZjtBQUNXO0FBRXBELDRCQUE0QjtBQUNyQixlQUFlRyxJQUFJQyxHQUFnQjtJQUN4QyxNQUFNQyxRQUFRLE1BQU1KLHVEQUFRQSxDQUFDO1FBQUVHO1FBQUtFLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUFDO0lBQ3hFLElBQUksQ0FBQ0osU0FBU0EsTUFBTUssSUFBSSxLQUFLLFNBQVM7UUFDcEMsT0FBT1YscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQVcsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDaEU7SUFDQSxNQUFNQyxTQUFTLE1BQU1aLG9EQUFhQTtJQUNsQyxNQUFNYSxLQUFLRCxPQUFPQyxFQUFFO0lBQ3BCLGlDQUFpQztJQUNqQyxNQUFNQyxRQUFRLE1BQU1ELEdBQUdFLFVBQVUsQ0FBQyxTQUFTQyxJQUFJLENBQUMsQ0FBQyxHQUFHO1FBQUVDLFlBQVk7WUFBRUMsT0FBTztZQUFHQyxNQUFNO1lBQUdYLE1BQU07WUFBR1ksT0FBTztRQUFFO0lBQUUsR0FBR0MsT0FBTztJQUNySCxPQUFPdkIscURBQVlBLENBQUNXLElBQUksQ0FBQ0s7QUFDM0I7QUFFQSx5Q0FBeUM7QUFDbEMsZUFBZVEsTUFBTXBCLEdBQWdCO0lBQzFDLE1BQU1DLFFBQVEsTUFBTUosdURBQVFBLENBQUM7UUFBRUc7UUFBS0UsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQUM7SUFDeEUsSUFBSSxDQUFDSixTQUFTQSxNQUFNSyxJQUFJLEtBQUssU0FBUztRQUNwQyxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBVyxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNoRTtJQUNBLE1BQU0sRUFBRU8sS0FBSyxFQUFFSyxRQUFRLEVBQUUsR0FBRyxNQUFNckIsSUFBSU8sSUFBSTtJQUMxQyxNQUFNRyxTQUFTLE1BQU1aLG9EQUFhQTtJQUNsQyxNQUFNYSxLQUFLRCxPQUFPQyxFQUFFO0lBQ3BCLE1BQU1BLEdBQUdFLFVBQVUsQ0FBQyxTQUFTUyxTQUFTLENBQ3BDO1FBQUVOLE9BQU9BO0lBQU0sR0FDZjtRQUFFTyxNQUFNO1lBQUVqQixNQUFNZTtRQUFTO0lBQUU7SUFFN0IsT0FBT3pCLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7UUFBRWlCLFNBQVM7SUFBSztBQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXV0aC1hcHAvLi9zcmMvYXBwL2FwaS9hZG1pbi91c2Vycy9yb3V0ZS50cz82MGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IGdldFRva2VuIH0gZnJvbSAnbmV4dC1hdXRoL2p3dCc7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJy4uLy4uLy4uLy4uL2xpYi9tb25nb2RiJztcclxuXHJcbi8vIEt1bGxhbsSxY8SxIGxpc3Rlc2luaSBkw7ZuZXJcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbih7IHJlcSwgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQgfSk7XHJcbiAgaWYgKCF0b2tlbiB8fCB0b2tlbi5yb2xlICE9PSAnYWRtaW4nKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogJ1lldGtpc2l6JyB9LCB7IHN0YXR1czogNDAxIH0pO1xyXG4gIH1cclxuICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlO1xyXG4gIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgLy8gU2FkZWNlIGdlcmVrbGkgYWxhbmxhcsSxIGTDtm5kw7xyXHJcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmZpbmQoe30sIHsgcHJvamVjdGlvbjogeyBlbWFpbDogMSwgbmFtZTogMSwgcm9sZTogMSwgaW1hZ2U6IDEgfSB9KS50b0FycmF5KCk7XHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXJzKTtcclxufVxyXG5cclxuLy8gS3VsbGFuxLFjxLEgcm9sw7xuw7wgZ8O8bmNlbGxlciAoZW1haWwgaWxlKVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUEFUQ0gocmVxOiBOZXh0UmVxdWVzdCkge1xyXG4gIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oeyByZXEsIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIH0pO1xyXG4gIGlmICghdG9rZW4gfHwgdG9rZW4ucm9sZSAhPT0gJ2FkbWluJykge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdZZXRraXNpeicgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICB9XHJcbiAgY29uc3QgeyBlbWFpbCwgcm9sZU5hbWUgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZTtcclxuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gIGF3YWl0IGRiLmNvbGxlY3Rpb24oJ3VzZXJzJykudXBkYXRlT25lKFxyXG4gICAgeyBlbWFpbDogZW1haWwgfSxcclxuICAgIHsgJHNldDogeyByb2xlOiByb2xlTmFtZSB9IH1cclxuICApO1xyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImdldFRva2VuIiwiY2xpZW50UHJvbWlzZSIsIkdFVCIsInJlcSIsInRva2VuIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsInJvbGUiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJjbGllbnQiLCJkYiIsInVzZXJzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJwcm9qZWN0aW9uIiwiZW1haWwiLCJuYW1lIiwiaW1hZ2UiLCJ0b0FycmF5IiwiUEFUQ0giLCJyb2xlTmFtZSIsInVwZGF0ZU9uZSIsIiRzZXQiLCJzdWNjZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/admin/users/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/uuid","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fadmin%2Fusers%2Froute&page=%2Fapi%2Fadmin%2Fusers%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Fusers%2Froute.ts&appDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CTUF-FX505DT%5CDocuments%5CGitHub%5Cnext-auth&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();