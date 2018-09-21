/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: printHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printHeader", function() { return printHeader; });
const headerText = 'Repo Lister';

function printHeader() {
  return headerText;
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: gitHubReposCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gitHubReposCollection", function() { return gitHubReposCollection; });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/search.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");


//import * as repoList from './publishRepoList';

const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');
const gitHeader = gitReposForm.querySelector('#header-id');

gitInput.focus();
var reposArray = [];
function gitHubReposCollection() {
  document.querySelector('#git-repo-form').addEventListener('submit', e => {
    e.preventDefault();
    //reposArray = gitData.getDataForGitHubRepos();
    console.log(_search_js__WEBPACK_IMPORTED_MODULE_0__["getDataForGitHubRepos"]());
    //console.log(reposArray);
  });
  return reposArray;
}
gitHubReposCollection();

gitHeader.innerHTML = _header_js__WEBPACK_IMPORTED_MODULE_1__["printHeader"]();

// repoList.displaygitReposList();


/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/*! exports provided: fetchGitHubRepos, getDataForGitHubRepos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGitHubRepos", function() { return fetchGitHubRepos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataForGitHubRepos", function() { return getDataForGitHubRepos; });
const gitHubContainer = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');

const fetchGitHubRepos = url => {
  return fetch(url).then(res => res.json());
};

const gitRepoList = [];
function getDataForGitHubRepos() {
  const gitUserNameText = gitReposForm.querySelector('#git-search-input').value;
  fetchGitHubRepos(`https://api.github.com/users/${gitUserNameText}/repos`).then(data => {
    data.map(obj => {
      gitRepoList.push(obj.name);
    });
  });
  return gitRepoList;
}

// gitInput.focus();
// export function gitHubReposCollection() {
//   document.querySelector('#git-repo-form').addEventListener('submit', e => {
//     //e.preventDefault();
//     const gitUserNameText = gitReposForm.querySelector('#git-search-input').value;
//     fetchGitHubRepos(`https://api.github.com/users/${gitUserNameText}/repos`).then(data => {
//       return data[0].name;
//       //   const gitRepoList = data.map(obj => {
//       //     return obj.name;
//       //   });
//       //return gitRepoList;
//     });
//   });
// }
//gitHubReposCollection();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUF1QztBQUNEO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0VBQTZCO0FBQzdDO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0Isc0RBQWtCOztBQUV4Qzs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBLG1EQUFtRCxnQkFBZ0I7QUFDbkU7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zdCBoZWFkZXJUZXh0ID0gJ1JlcG8gTGlzdGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludEhlYWRlcigpIHtcclxuICByZXR1cm4gaGVhZGVyVGV4dDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBnaXREYXRhIGZyb20gJy4vc2VhcmNoLmpzJztcclxuaW1wb3J0ICogYXMgaGVhZGVyIGZyb20gJy4vaGVhZGVyLmpzJztcclxuLy9pbXBvcnQgKiBhcyByZXBvTGlzdCBmcm9tICcuL3B1Ymxpc2hSZXBvTGlzdCc7XHJcblxyXG5jb25zdCBnaXRSZXBvc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0LXJlcG8tZm9ybScpO1xyXG5jb25zdCBnaXRJbnB1dCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LXNlYXJjaC1pbnB1dCcpO1xyXG5jb25zdCBnaXRIZWFkZXIgPSBnaXRSZXBvc0Zvcm0ucXVlcnlTZWxlY3RvcignI2hlYWRlci1pZCcpO1xyXG5cclxuZ2l0SW5wdXQuZm9jdXMoKTtcclxudmFyIHJlcG9zQXJyYXkgPSBbXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdpdEh1YlJlcG9zQ29sbGVjdGlvbigpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0LXJlcG8tZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy9yZXBvc0FycmF5ID0gZ2l0RGF0YS5nZXREYXRhRm9yR2l0SHViUmVwb3MoKTtcclxuICAgIGNvbnNvbGUubG9nKGdpdERhdGEuZ2V0RGF0YUZvckdpdEh1YlJlcG9zKCkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXBvc0FycmF5KTtcclxuICB9KTtcclxuICByZXR1cm4gcmVwb3NBcnJheTtcclxufVxyXG5naXRIdWJSZXBvc0NvbGxlY3Rpb24oKTtcclxuXHJcbmdpdEhlYWRlci5pbm5lckhUTUwgPSBoZWFkZXIucHJpbnRIZWFkZXIoKTtcclxuXHJcbi8vIHJlcG9MaXN0LmRpc3BsYXlnaXRSZXBvc0xpc3QoKTtcclxuIiwiY29uc3QgZ2l0SHViQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdC1odWItY29udGFpbmVyJyk7XHJcbmNvbnN0IGdpdFJlcG9zRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXQtcmVwby1mb3JtJyk7XHJcbmNvbnN0IGdpdElucHV0ID0gZ2l0UmVwb3NGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNnaXQtc2VhcmNoLWlucHV0Jyk7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hHaXRIdWJSZXBvcyA9IHVybCA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKHVybCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn07XHJcblxyXG5jb25zdCBnaXRSZXBvTGlzdCA9IFtdO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0YUZvckdpdEh1YlJlcG9zKCkge1xyXG4gIGNvbnN0IGdpdFVzZXJOYW1lVGV4dCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LXNlYXJjaC1pbnB1dCcpLnZhbHVlO1xyXG4gIGZldGNoR2l0SHViUmVwb3MoYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtnaXRVc2VyTmFtZVRleHR9L3JlcG9zYCkudGhlbihkYXRhID0+IHtcclxuICAgIGRhdGEubWFwKG9iaiA9PiB7XHJcbiAgICAgIGdpdFJlcG9MaXN0LnB1c2gob2JqLm5hbWUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGdpdFJlcG9MaXN0O1xyXG59XHJcblxyXG4vLyBnaXRJbnB1dC5mb2N1cygpO1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2l0SHViUmVwb3NDb2xsZWN0aW9uKCkge1xyXG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXQtcmVwby1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XHJcbi8vICAgICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGNvbnN0IGdpdFVzZXJOYW1lVGV4dCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LXNlYXJjaC1pbnB1dCcpLnZhbHVlO1xyXG4vLyAgICAgZmV0Y2hHaXRIdWJSZXBvcyhgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy8ke2dpdFVzZXJOYW1lVGV4dH0vcmVwb3NgKS50aGVuKGRhdGEgPT4ge1xyXG4vLyAgICAgICByZXR1cm4gZGF0YVswXS5uYW1lO1xyXG4vLyAgICAgICAvLyAgIGNvbnN0IGdpdFJlcG9MaXN0ID0gZGF0YS5tYXAob2JqID0+IHtcclxuLy8gICAgICAgLy8gICAgIHJldHVybiBvYmoubmFtZTtcclxuLy8gICAgICAgLy8gICB9KTtcclxuLy8gICAgICAgLy9yZXR1cm4gZ2l0UmVwb0xpc3Q7XHJcbi8vICAgICB9KTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG4vL2dpdEh1YlJlcG9zQ29sbGVjdGlvbigpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9