/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./gem-puzzle/assets/audio/move.mp3":
/*!******************************************!*\
  !*** ./gem-puzzle/assets/audio/move.mp3 ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c9d10075b813b1f7269d85c5b2cb43ea.mp3");

/***/ }),

/***/ "./gem-puzzle/index.html":
/*!*******************************!*\
  !*** ./gem-puzzle/index.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>Gem Puzzle</title>\r\n</head>\r\n<body class=\"body\">\r\n\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./gem-puzzle/index.css":
/*!******************************!*\
  !*** ./gem-puzzle/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./gem-puzzle/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./gem-puzzle/index.html");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ "./gem-puzzle/index.css");
/* harmony import */ var _assets_audio_move_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/audio/move.mp3 */ "./gem-puzzle/assets/audio/move.mp3");




// !random number
const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ! create layout
const body = document.querySelector("body");

const header = document.createElement("header");
header.className = "header";
body.append(header);

const main = document.createElement("main");
main.className = "main";
body.append(main);

const footer = document.createElement("footer");
footer.className = "footer";
body.append(footer);

const ui = document.createElement("div");
ui.className = "ui";
header.append(ui);

const counter = document.createElement("div");
counter.className = "counter";
header.append(counter);

const btnShuffle = document.createElement("button");
btnShuffle.className = "shuffle btn";
ui.append(btnShuffle);
btnShuffle.textContent = "Shuffle and start";

const btnSound = document.createElement("button");
btnSound.className = "sound btn";
ui.append(btnSound);
btnSound.textContent = "Mute";

const btnSave = document.createElement("button");
btnSave.className = "save btn";
ui.append(btnSave);
btnSave.textContent = "Save";

const btnLoad = document.createElement("button");
btnLoad.className = "load btn";
ui.append(btnLoad);
btnLoad.textContent = "Load";

const btnResults = document.createElement("button");
btnResults.className = "results btn";
ui.append(btnResults);
btnResults.textContent = "results";

const time = document.createElement("div");
time.className = "time";
counter.append(time);
time.textContent = "Time: 00:00";

const moves = document.createElement("div");
moves.className = "moves";
counter.append(moves);
moves.textContent = "Moves: 0";

const frameSize = document.createElement("select");
frameSize.className = "frameSize";
ui.append(frameSize);

for (let i = 1; i <= 6; i++) {
  const option = document.createElement("option");
  option.className = "option";
  option.textContent = `${i + 2} x ${i + 2}`;
  option.setAttribute("value", i + 2);
  if (i === 2) {
    option.setAttribute("selected", "");
  }
  frameSize.append(option);
}

const wrapper = document.createElement("div");
wrapper.className = "wrapper";
main.append(wrapper);

const modalWin = document.createElement("div");
modalWin.className = "modalWin";
main.append(modalWin);

const modalResults = document.createElement("div");
modalResults.className = "modalResults";
body.append(modalResults);

const tableResults = document.createElement("div");
tableResults.className = "tableResults";
modalResults.append(tableResults);

const tittleResults = document.createElement("h2");
tittleResults.className = "tittleResults";
tableResults.append(tittleResults);
tittleResults.textContent = "Results";

const modalWinText = document.createElement("div");
modalWinText.className = "modalWinText";
modalWin.append(modalWinText);

let valueFrameSize = frameSize.value;
let empty = {
  top: "",
  left: "",
};
let winningPosition;
let currentPositionItems;

// !create items in wrapper
function createItems() {
  wrapper.innerHTML = "";
  for (let i = 1; i <= valueFrameSize ** 2 - 1; i++) {
    const item = document.createElement("div");
    item.className = "item";
    item.innerHTML = i;
    item.style.width = `${100 / valueFrameSize}%`;
    item.style.height = `${100 / valueFrameSize}%`;
    wrapper.append(item);
  }
}
createItems();

//!Assign position to items
let arrItemsCurrent = Array.from(wrapper.querySelectorAll(".item"));

function setPositionItems() {
  for (let i = 0; i < valueFrameSize ** 2 - 1; i++) {
    const left = i % valueFrameSize;
    const top = (i - left) / valueFrameSize;
    let item = arrItemsCurrent[i];
    const itemSize = parseFloat(item.style.width);
    item.style.left = `${left * itemSize}%`;
    item.style.top = `${top * itemSize}%`;
  }
}
setPositionItems();

// !add start position to empty item
empty.top = arrItemsCurrent[arrItemsCurrent.length - 1].style.top;
empty.left = empty.top;

//!create an initial item positions object to win
function createObjWin() {
  let objWin = {};
  for (let i = 0; i < arrItemsCurrent.length; i++) {
    objWin[`div${i}`] = {
      top: arrItemsCurrent[i].style.top,
      left: arrItemsCurrent[i].style.left,
      name: arrItemsCurrent[i].textContent,
    };
  }
  return objWin;
}

// !add win to results
function addResult() {
  if (tableResults.querySelectorAll(".textResult").length > 9) {
    tableResults.querySelector(".textResult").remove();
  }
  const paragraph = document.createElement("p");
  paragraph.className = "textResult";
  tableResults.append(paragraph);
  paragraph.textContent = `Type ${valueFrameSize}x${valueFrameSize}, Time: ${
    (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec)
  } and ${moveCount} moves!`;
}

// ! Win or not?
function isWin() {
  currentPositionItems = createObjWin();
  let props = Object.getOwnPropertyNames(winningPosition);
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    const prop2 = Number(currentPositionItems[prop].name) - 1;
    if (
      currentPositionItems[prop].left !== winningPosition[`div${prop2}`].left ||
      currentPositionItems[prop].top !== winningPosition[`div${prop2}`].top ||
      currentPositionItems[prop].name !== winningPosition[`div${prop2}`].name
    ) {
      return false;
    }
  }

  if (sec > 0 || min > 0) {
    addResult();
    modalWin.style.display = "flex";
    modalWinText.textContent = `Hooray! You solved the puzzle in ${
      (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec)
    } and ${moveCount} moves!`;
    resetTime();
    moveCount = 0;
    moves.textContent = `Moves: ${moveCount}`;
  }
}

// !Create new frame Size
function createNewFrameSize() {
  if (valueFrameSize !== frameSize.value) {
    modalWin.style.display = "none";
    valueFrameSize = frameSize.value;
    createItems();
    arrItemsCurrent = Array.from(wrapper.querySelectorAll(".item"));
    setPositionItems();
    empty.top = arrItemsCurrent[arrItemsCurrent.length - 1].style.top;
    empty.left = empty.top;
    winningPosition = createObjWin();
    moveCount = 0;
    moves.textContent = `Moves: ${moveCount}`;
    resetTime();
  }
}
frameSize.addEventListener("click", createNewFrameSize);

// !Shuffle
function shuffle() {
  modalWin.style.display = "none";
  let j;
  let current;
  for (let i = arrItemsCurrent.length - 1; i > 0; i--) {
    j = getRandomNum(0, valueFrameSize ** 2 - 2);
    current = arrItemsCurrent[i];
    arrItemsCurrent[i] = arrItemsCurrent[j];
    arrItemsCurrent[j] = current;
  }
  setPositionItems();
  // !solvability check
  currentPositionItems = createObjWin();
  let props = Object.getOwnPropertyNames(currentPositionItems);
  let arrValueCurrent = [];
  let counterInversion = 0;
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    arrValueCurrent.push(currentPositionItems[prop].name);
  }
  for (let i = 0; i < arrValueCurrent.length; i++) {
    for (let j = 0; j < arrValueCurrent.length; j++) {
      if (arrValueCurrent[i] > arrValueCurrent[j + i]) {
        counterInversion++;
      }
    }
  }
  if (valueFrameSize % 2 > 0 && counterInversion % 2 > 0) {
    return shuffle();
  }

  let blankRow = valueFrameSize - 1;
  if (valueFrameSize % 2 === 0 && (counterInversion + blankRow) % 2 === 0) {
    return shuffle();
  }

  empty.top = arrItemsCurrent[arrItemsCurrent.length - 1].style.top;
  empty.left = empty.top;
}
btnShuffle.addEventListener("click", shuffle);

//! Time counter
let sec = 0;
let min = 0;
let t;

function tick() {
  sec++;
  if (sec > 60) {
    sec = 0;
    min++;
  }
}

function addTextTime() {
  time.textContent =
    "Time: " + (min > 9 ? min : "0" + min) + ":" + (sec > 9 ? sec : "0" + sec);
}

function resetTime() {
  sec = 0;
  min = 0;
  clearTimeout(t);
  addTextTime();
}

function addTime() {
  tick();
  addTextTime();
  t = setTimeout(addTime, 1000);
}

// ! Move items
function move(el) {
  if (el.target.classList.contains("item")) {
    let left = el.target.style.left;
    let top = el.target.style.top;
    let leftDifference = Math.abs(parseInt(empty.left) - parseInt(left));
    let topDifference = Math.abs(parseInt(empty.top) - parseInt(top));

    if (
      leftDifference + topDifference <=
      Math.round(100 / valueFrameSize) + 1
    ) {
      el.target.style.left = empty.left;
      el.target.style.top = empty.top;
      empty.left = left;
      empty.top = top;
      addMove();
      isWin();
      if (btnSound.textContent === "Mute") {
        new Audio(_assets_audio_move_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]).play();
      }
    }
  }
}
wrapper.addEventListener("click", move);

// ! Move counter
let moveCount = 0;
function addMove() {
  moveCount++;
  moves.textContent = `Moves: ${moveCount}`;
}

btnShuffle.addEventListener("click", resetTime);
btnShuffle.addEventListener("click", function () {
  moveCount = 0;
  moves.textContent = `Moves: ${moveCount}`;
});
btnShuffle.addEventListener("click", addTime);

// ! Save in LocalStorage
function setLoadPositionItems() {
  empty = JSON.parse(localStorage.getItem("empty"));
  modalWin.style.display = "none";
  valueFrameSize = localStorage.getItem("valueFrameSize");
  createItems();
  arrItemsCurrent = Array.from(wrapper.querySelectorAll(".item"));
  setPositionItems();
  winningPosition = createObjWin();
  moveCount = 0;
  moves.textContent = `Moves: ${moveCount}`;
  resetTime();
  for (let i = 0; i < valueFrameSize ** 2 - 1; i++) {
    let item = arrItemsCurrent[i];
    item.style.left = currentPositionItems[`div${i}`].left;
    item.style.top = currentPositionItems[`div${i}`].top;
  }
}

btnSave.addEventListener("click", function () {
  currentPositionItems = createObjWin();
  localStorage.setItem(
    "currentPositionItems",
    JSON.stringify(currentPositionItems)
  );
  localStorage.setItem("valueFrameSize", valueFrameSize);
  localStorage.setItem("empty", JSON.stringify(empty));
  localStorage.setItem("moveCount", moveCount);
  localStorage.setItem("mute", btnSound.textContent);
  localStorage.setItem("sec", sec);
  if (min > 0) {
    localStorage.setItem("min", min);
  }
});

btnLoad.addEventListener("click", function () {
  // if ()
  currentPositionItems = JSON.parse(
    localStorage.getItem("currentPositionItems")
  );
  empty = JSON.parse(localStorage.getItem("empty"));
  valueFrameSize = localStorage.getItem("valueFrameSize");
  frameSize.value = valueFrameSize;
  setLoadPositionItems();
  moveCount = localStorage.getItem("moveCount");
  moves.textContent = `Moves: ${moveCount}`;
  btnSound.textContent = localStorage.getItem("mute");
  sec = localStorage.getItem("sec");
  if (localStorage.getItem("min") > 0) {
    min = localStorage.getItem("min");
  }
  clearTimeout(t);
  addTextTime();
  addTime();
});

btnResults.addEventListener("click", function () {
  modalResults.style.display = "flex";
});

modalResults.addEventListener("click", function () {
  modalResults.style.display = "none";
});

// ! Mute/unmute audio
btnSound.addEventListener("click", function () {
  if (btnSound.textContent === "Mute") {
    btnSound.textContent = "Unmute";
  } else if (btnSound.textContent === "Unmute") {
    btnSound.textContent = "Mute";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=index.js.map