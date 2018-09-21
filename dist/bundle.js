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
/* harmony import */ var _publishRepoList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publishRepoList.js */ "./src/publishRepoList.js");




const container = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const gitInput = gitReposForm.querySelector('#git-search-input');
const gitHeader = gitReposForm.querySelector('#header-id');
const gitList = gitReposForm.querySelector('#git-list');

gitInput.focus();
function gitHubReposCollection() {
  document.querySelector('#git-repo-form').addEventListener('submit', e => {
    e.preventDefault();
    const arr = _search_js__WEBPACK_IMPORTED_MODULE_0__["getDataForGitHubRepos"]();
    console.log(arr);
    console.log(_publishRepoList_js__WEBPACK_IMPORTED_MODULE_2__["displaygitReposList"](arr));
    container.innerHTML = _publishRepoList_js__WEBPACK_IMPORTED_MODULE_2__["displaygitReposList"](arr);
    console.log('bye');
  });
}
gitHubReposCollection();

gitHeader.innerHTML = _header_js__WEBPACK_IMPORTED_MODULE_1__["printHeader"]();


/***/ }),

/***/ "./src/publishRepoList.js":
/*!********************************!*\
  !*** ./src/publishRepoList.js ***!
  \********************************/
/*! exports provided: displaygitReposList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displaygitReposList", function() { return displaygitReposList; });
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/search.js");

const container = document.querySelector('#git-hub-container');
const gitReposForm = document.querySelector('#git-repo-form');
const listGit = gitReposForm.querySelector('#git-list');
//const ul = document.querySelector('git-list');
const gitReposListArray = _search_js__WEBPACK_IMPORTED_MODULE_0__["getDataForGitHubRepos"]();
// console.log('Here is:' + gitReposListArray);

function displaygitReposList(gitReposListArray) {
  gitReposListArray.map(obj => {
    const li = document.createElement('li');
    console.log('hey');
    li.textContent = 'hello';
    console.log(li);
    listGit.appendChild(li);
    container.appendChild(listGit);
    console.log(listGit);
    console.log(container);
    // const li = document.createElement('li');
    // li.appendChild(document.createTextNode('hello'));
    // ul.appendChild(li);
    // listGit.appendChild(li);
    // container.appendChild(ul);
    // container.appendChild(listGit);
  });
  //console.log(ul);
  return container;
}


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

const GIT_API = 'c21833ac403f9c45e47e4a472de9335a3eda7426';

const gitRepoList = [];
function getDataForGitHubRepos() {
  const gitUserNameText = gitReposForm.querySelector('#git-search-input').value;
  fetchGitHubRepos(
    `https://api.github.com/users/${gitUserNameText}/repos?access_token=${GIT_API}`
  ).then(data => {
    data.map(obj => {
      gitRepoList.push(obj.name);
    });
  });
  return gitRepoList;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1Ymxpc2hSZXBvTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFDRDtBQUNXOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0EsZ0JBQWdCLGdFQUE2QjtBQUM3QztBQUNBLGdCQUFnQix1RUFBNEI7QUFDNUMsMEJBQTBCLHVFQUE0QjtBQUN0RDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLHNCQUFzQixzREFBa0I7Ozs7Ozs7Ozs7Ozs7QUN2QnhDO0FBQUE7QUFBQTtBQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnRUFBNkI7QUFDdkQ7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCLHNCQUFzQixRQUFRO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IGhlYWRlclRleHQgPSAnUmVwbyBMaXN0ZXInO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SGVhZGVyKCkge1xyXG4gIHJldHVybiBoZWFkZXJUZXh0O1xyXG59XHJcbiIsImltcG9ydCAqIGFzIGdpdERhdGEgZnJvbSAnLi9zZWFyY2guanMnO1xyXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xyXG5pbXBvcnQgKiBhcyByZXBvTGlzdCBmcm9tICcuL3B1Ymxpc2hSZXBvTGlzdC5qcyc7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0LWh1Yi1jb250YWluZXInKTtcclxuY29uc3QgZ2l0UmVwb3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdC1yZXBvLWZvcm0nKTtcclxuY29uc3QgZ2l0SW5wdXQgPSBnaXRSZXBvc0Zvcm0ucXVlcnlTZWxlY3RvcignI2dpdC1zZWFyY2gtaW5wdXQnKTtcclxuY29uc3QgZ2l0SGVhZGVyID0gZ2l0UmVwb3NGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXItaWQnKTtcclxuY29uc3QgZ2l0TGlzdCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LWxpc3QnKTtcclxuXHJcbmdpdElucHV0LmZvY3VzKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBnaXRIdWJSZXBvc0NvbGxlY3Rpb24oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdC1yZXBvLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFyciA9IGdpdERhdGEuZ2V0RGF0YUZvckdpdEh1YlJlcG9zKCk7XHJcbiAgICBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgY29uc29sZS5sb2cocmVwb0xpc3QuZGlzcGxheWdpdFJlcG9zTGlzdChhcnIpKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSByZXBvTGlzdC5kaXNwbGF5Z2l0UmVwb3NMaXN0KGFycik7XHJcbiAgICBjb25zb2xlLmxvZygnYnllJyk7XHJcbiAgfSk7XHJcbn1cclxuZ2l0SHViUmVwb3NDb2xsZWN0aW9uKCk7XHJcblxyXG5naXRIZWFkZXIuaW5uZXJIVE1MID0gaGVhZGVyLnByaW50SGVhZGVyKCk7XHJcbiIsImltcG9ydCAqIGFzIGdpdExpc3QgZnJvbSAnLi9zZWFyY2guanMnO1xyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0LWh1Yi1jb250YWluZXInKTtcclxuY29uc3QgZ2l0UmVwb3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dpdC1yZXBvLWZvcm0nKTtcclxuY29uc3QgbGlzdEdpdCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LWxpc3QnKTtcclxuLy9jb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2dpdC1saXN0Jyk7XHJcbmNvbnN0IGdpdFJlcG9zTGlzdEFycmF5ID0gZ2l0TGlzdC5nZXREYXRhRm9yR2l0SHViUmVwb3MoKTtcclxuLy8gY29uc29sZS5sb2coJ0hlcmUgaXM6JyArIGdpdFJlcG9zTGlzdEFycmF5KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Z2l0UmVwb3NMaXN0KGdpdFJlcG9zTGlzdEFycmF5KSB7XHJcbiAgZ2l0UmVwb3NMaXN0QXJyYXkubWFwKG9iaiA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zb2xlLmxvZygnaGV5Jyk7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9ICdoZWxsbyc7XHJcbiAgICBjb25zb2xlLmxvZyhsaSk7XHJcbiAgICBsaXN0R2l0LmFwcGVuZENoaWxkKGxpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0R2l0KTtcclxuICAgIGNvbnNvbGUubG9nKGxpc3RHaXQpO1xyXG4gICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcclxuICAgIC8vIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIC8vIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdoZWxsbycpKTtcclxuICAgIC8vIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIC8vIGxpc3RHaXQuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgLy8gY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0R2l0KTtcclxuICB9KTtcclxuICAvL2NvbnNvbGUubG9nKHVsKTtcclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcbiIsImNvbnN0IGdpdEh1YkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnaXQtaHViLWNvbnRhaW5lcicpO1xyXG5jb25zdCBnaXRSZXBvc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2l0LXJlcG8tZm9ybScpO1xyXG5jb25zdCBnaXRJbnB1dCA9IGdpdFJlcG9zRm9ybS5xdWVyeVNlbGVjdG9yKCcjZ2l0LXNlYXJjaC1pbnB1dCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoR2l0SHViUmVwb3MgPSB1cmwgPT4ge1xyXG4gIHJldHVybiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59O1xyXG5cclxuY29uc3QgR0lUX0FQSSA9ICdjMjE4MzNhYzQwM2Y5YzQ1ZTQ3ZTRhNDcyZGU5MzM1YTNlZGE3NDI2JztcclxuXHJcbmNvbnN0IGdpdFJlcG9MaXN0ID0gW107XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhRm9yR2l0SHViUmVwb3MoKSB7XHJcbiAgY29uc3QgZ2l0VXNlck5hbWVUZXh0ID0gZ2l0UmVwb3NGb3JtLnF1ZXJ5U2VsZWN0b3IoJyNnaXQtc2VhcmNoLWlucHV0JykudmFsdWU7XHJcbiAgZmV0Y2hHaXRIdWJSZXBvcyhcclxuICAgIGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7Z2l0VXNlck5hbWVUZXh0fS9yZXBvcz9hY2Nlc3NfdG9rZW49JHtHSVRfQVBJfWBcclxuICApLnRoZW4oZGF0YSA9PiB7XHJcbiAgICBkYXRhLm1hcChvYmogPT4ge1xyXG4gICAgICBnaXRSZXBvTGlzdC5wdXNoKG9iai5uYW1lKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBnaXRSZXBvTGlzdDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9