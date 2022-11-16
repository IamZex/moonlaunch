/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log('ready for moonshot!')\r\n\r\nconst main = document.createElement('div');\r\nmain.classList.add('main');\r\n\r\n/* now to make sure that the pages will load on click */\r\nfunction tabEvent(contentElement){\r\n   \r\n    const tabs = document.querySelectorAll('.tab');\r\n\r\n    const tags= document.querySelectorAll('[data-tab-target]')\r\n    const tabContents =document.querySelectorAll('[data-tab-content]')\r\n    \r\n    tags.forEach(tab =>{\r\n        tab.addEventListener('click',()=>{\r\n            const target = document.querySelector(tab.dataset.tabTarget)\r\n            tabContents.forEach(tabContent =>{\r\n                tabContent.classList.remove('active')\r\n                console.log(\"test\")\r\n             })\r\n            target.classList.add('active')\r\n        })\r\n    })\r\n    \r\n    tabs.forEach(tab => {\r\n        tab.addEventListener('click',(e)=>{\r\n\r\n            switch(e.target.innerText){\r\n                \r\n                case \"Countdown\":\r\n                    tab.classList.add(\"active\")\r\n                    console.log(\"clicked\")\r\n                    break;\r\n                \r\n                case \"Explanation\":\r\n                    tab.classList.add(\"active\")\r\n                    break;\r\n                \r\n                case \"About me\":\r\n                    tab.classList.add(\"active\")\r\n                    break;\r\n               \r\n                default:\r\n                    return;\r\n            }\r\n        })\r\n    })\r\n}\r\n\r\n\r\nconst tabs = document.querySelectorAll('[data-tab-target]')\r\nconst tabContents = document.querySelectorAll('[data-tab-content]')\r\n\r\ntabs.forEach(tab => {\r\n  tab.addEventListener('click', () => {\r\n    const target = document.querySelector(tab.dataset.tabTarget)\r\n    tabContents.forEach(tabContent => {\r\n      tabContent.classList.remove('active')\r\n    })\r\n    tabs.forEach(tab => {\r\n      tab.classList.remove('active')\r\n    })\r\n    tab.classList.add('active')\r\n    target.classList.add('active')\r\n  })\r\n})\r\n\r\n/*starting with computershared.net I calculated a date */\r\n\r\nvar floatLockDate = new Date(\"July 9, 2024 09:30:00\").getTime();\r\nvar moonLaunchDate = new Date(\"May 11, 2028 09:30:00\").getTime();\r\n\r\n/* Here we create the countdown time */\r\n\r\nvar floatInterval = setInterval(function(){\r\n\r\n    var now = new Date().getTime();\r\n    var floatDistance = floatLockDate - now;\r\n    var floatDays = Math.floor(floatDistance / 86400000);\r\n    var floatHours = Math.floor(floatDistance % (1000*60*60*24)/(1000*60*60));\r\n    var floatMinutes = Math.floor(floatDistance % (1000*60*60)/(1000*60));\r\n    var floatSeconds = Math.floor(floatDistance % (1000*60)/1000);\r\n    var floatLock = document.getElementById(\"floatLock\").innerHTML =\r\n        floatDays +\" Days \"+ floatHours +\" Hours \"\r\n        + floatMinutes+\" Minutes \"+ floatSeconds +\" Seconds \";\r\n\r\n        if (floatDistance < 0) {\r\n            clearInterval(floatInterval)\r\n            document.querySelector(\".floatLock\").textContent = \"We've locked the Free Float\"\r\n        };\r\n},1000)\r\n\r\nvar moonInterval = setInterval(function(){\r\n\r\n    var now = new Date().getTime();\r\n    var distance = moonLaunchDate - now;\r\n    var days = Math.floor(distance /(1000*60*60*24));\r\n    var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));\r\n    var minutes = Math.floor(distance %(1000*60*60)/(1000*60));\r\n    var seconds = Math.floor(distance % (1000*60)/1000);\r\n    var moonLaunch = document.getElementById(\"moonLaunch\").innerHTML =\r\n    days + \" Days \" + hours + \" Hours \"+ minutes + \" Minutes \" + seconds +\" Seconds \";\r\n\r\n    if (distance < 0) {\r\n        clearInterval(moonInterval)\r\n        document.querySelector(\".moonLaunch\").textContent = \"Happy Launch Day!\"\r\n    };\r\n},1000)\r\n\r\n\n\n//# sourceURL=webpack://drs_countdown/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;