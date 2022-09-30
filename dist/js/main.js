/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/DataPoint.js":
/*!*****************************!*\
  !*** ./src/js/DataPoint.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass DataPoint {\n    constructor(x, y, type) {\n        this.type = 0;\n        this.color = \"#000\";\n        this.x = x;\n        this.y = y;\n        this.type = type;\n        this.v = { x: Math.random() * 10 - 5, y: Math.random() * 10 - 5 };\n        this.setColor();\n    }\n    setColor() {\n        switch (this.type) {\n            case 0:\n                this.color = \"#F00\";\n                break;\n            case 1:\n                this.color = \"#0F0\";\n                break;\n            case 2:\n                this.color = \"#00F\";\n                break;\n            case 3:\n                this.color = \"#FF0\";\n                break;\n            default:\n                this.color = \"#000\";\n                break;\n        }\n    }\n    update() {\n        this.x += this.v.x;\n        this.y += this.v.y;\n        if (this.x < 0 || this.x > 300)\n            this.v.x *= -1;\n        if (this.y < 0 || this.y > 300)\n            this.v.y *= -1;\n    }\n    dist(x, y) {\n        const dX = Math.abs(x - this.x);\n        const dY = Math.abs(y - this.y);\n        return Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2));\n    }\n    draw(ctx) {\n        ctx.fillStyle = \"#000\";\n        ctx.fillRect(this.x - 2, this.y - 2, 4, 4);\n    }\n}\nexports[\"default\"] = DataPoint;\n\n\n//# sourceURL=webpack://neighbour-boundary/./src/js/DataPoint.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst DataPoint_1 = __importDefault(__webpack_require__(/*! ./DataPoint */ \"./src/js/DataPoint.js\"));\nconst canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nconst width = canvas.width;\nconst height = canvas.height;\nconst resolution = 2;\nconst dataPoints = [];\nfor (let i = 0; i < 25; i++) {\n    dataPoints.push(new DataPoint_1.default(Math.random() * width, Math.random() * height, Math.floor(Math.random() * 2)));\n}\nconst update = () => {\n    dataPoints.forEach((s) => {\n        s.update();\n    });\n};\nconst draw = () => {\n    if (ctx === null)\n        return;\n    for (let x = 0; x < width; x += resolution) {\n        for (let y = 0; y < height; y += resolution) {\n            let smallestDist = Infinity;\n            let col = \"#000\";\n            for (let i = 0; i < dataPoints.length; i++) {\n                const s = dataPoints[i];\n                const dist = s.dist(x, y);\n                if (dist < smallestDist) {\n                    smallestDist = dist;\n                    col = s.color;\n                }\n            }\n            ctx.fillStyle = col;\n            ctx.fillRect(x - (resolution / 2), y - (resolution / 2), resolution, resolution);\n        }\n    }\n};\nconst clear = () => {\n    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, width, height);\n};\nconst drawScene = () => {\n    clear();\n    draw();\n    update();\n    if (ctx != null) {\n        dataPoints.forEach((s) => s.draw(ctx));\n    }\n};\nconst live = true;\nif (live) {\n    setInterval(() => {\n        drawScene();\n        update();\n    }, 100);\n}\nelse {\n    draw();\n    if (ctx != null) {\n        dataPoints.forEach((s) => s.draw(ctx));\n    }\n}\n\n\n//# sourceURL=webpack://neighbour-boundary/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;