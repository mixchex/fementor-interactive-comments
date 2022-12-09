(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root\n{\n  /* Colors */\n  --moderate-blue-color: hsl(238, 40%, 52%);\n  --soft-red-color: hsl(358, 79%, 66%);\n  --light-greyish-blue-color: hsl(239, 57%, 85%);\n  --pale-red-color: hsl(357, 100%, 86%);\n  --dark-blue-color: hsl(212, 24%, 26%);\n  --grayish-blue-color: hsl(211, 10%, 45%);\n  --light-gray-color: hsl(223, 19%, 93%);\n  --very-light-gray-color: hsl(228, 33%, 97%);\n  --white-color: hsl(0, 0%, 100%);\n  --spacing: 8px;\n  --margin: 16px;\n  --border-radius: 8px;\n}\n\n*\n{\n  box-sizing: border-box;\n  transition: 0.1s ease-out;\n}\n\nsvg path\n{\n  transition: 0.02s ease-out;\n}\n\n.sr-only:not(:focus):not(:active)\n{\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  height: 1px;\n  overflow: hidden;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n.app\n{\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  font-family: 'Rubik', sans-serif;\n  background-color: var(--very-light-gray-color);\n  font-size: 16px;\n  line-height: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: calc(var(--margin)*4) 0;\n}\n\n.footer {\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top:40px;\n}\n\n.reset-button {\n  background-color:transparent;  \n  border:none;\n  color:var(--moderate-blue-color);\n  font-size:14px;\n  font-weight: bold;\n  padding:var(--margin) calc(var(--margin)*1.5);\n}\n\n.reset-button:hover { \n  color:var(--dark-blue-color);\n  cursor: pointer;\n}\n\n.attribution\n{\n  flex-grow: 0;\n  font-size: 11px;\n  text-align: center;\n  padding: 16px;\n}\n\n.attribution a\n{\n  color: hsl(228, 45%, 44%);\n}\n\n.content\n{\n  flex-grow: 1;\n  width: 100%;\n}\n\n.wrapper\n{\n  width: 100%;\n  max-width: 762px;\n  padding: 0 16px;\n  margin: 0 auto;\n}\n\n.overlay\n{\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n\n.overlay:before\n{\n  content: '';\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.6;\n  background-color: var(--dark-blue-color);\n  z-index: 9;\n  animation: fadeIn .25s ease-in-out 1 both;\n}\n\n.modal\n{\n  position: relative;\n  z-index: 10;\n  width: 100%;\n  margin: var(--margin);\n  max-width: 400px;\n  border-radius: var(--border-radius);\n  padding: calc(var(--margin)*2);\n  background-color: var(--white-color);\n  color:var(--grayish-blue-color);\n  animation: animateIn .5s ease-in-out .25s 1 both;\n}\n.modal__title {\n  margin:0 0 var(--margin);\n  line-height: 16px;\n  font-weight: 500;\n  color: var(--dark-blue-color);\n}\n.comments\n{\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.comments .comments\n{\n  margin-left: calc(var(--margin)*2.75);\n  padding-left: calc(var(--margin)*2.75);\n  border-left: 1px solid var(--light-gray-color);\n}\n\n.comment\n{\n  position: relative;\n  display: flex;\n  flex-direction: column-reverse;\n  background-color: var(--white-color);\n  width: 100%;\n  padding: var(--margin);\n  border-radius: var(--border-radius);\n  margin-bottom: var(--margin);\n  opacity:0;\n  animation: animateIn .5s ease-in-out .25s 1 both;\n}\n.comment-group {\n  height:auto;\n  max-height:0;\n  animation:open .75s ease-in 1 both;\n}\n.comment-group--close {\n  animation:close 1s ease-in 1 both;\n}\n.comment-group--close .comment { \n    animation: animateOut .5s ease-in-out .25s 1 both;\n}\n.comment-group--delete {\n  animation:close 1.5s ease-in 1 both;\n}\n.comment-group--delete .comment { \n    animation: animateOutDelete .5s ease-in-out .25s 1 both;\n}\n@keyframes open {\n  0% {\n    max-height: 0;\n  }\n  100% {\n    max-height:1000px;\n  }\n}\n@keyframes close {\n  0% {\n    max-height: 1000px;\n  }\n  100% {\n    max-height:0;\n  }\n}\n@keyframes fadeIn {\n  0% {\n    opacity:0;\n  }\n  100% {\n    opacity:1;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity:1;\n  }\n  100% {\n    opacity:0;\n  }\n}\n@keyframes animateIn {\n  0% {\n    transform:scale(0.9) translateY(10px);\n    opacity:0;\n  }\n  100% {\n    transform:scale(1) translate(0);\n    opacity:1;\n  }\n}\n@keyframes animateOut {\n  0% {\n    transform:scale(1);\n    opacity:1;\n  }\n  100% {\n    transform:scale(0.9);\n    opacity:0;\n  }\n}\n@keyframes animateOutDelete {\n  0% {\n    transform:translateX(0);\n    opacity:1;\n  }\n  100% {\n    transform:translateX(-20px);\n    background-color: var(--pale-red-color);\n    opacity:0;\n  }\n}\n\n.comment__aside\n{\n  margin-top: var(--margin);\n  height: 2.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.comment--reply .comment__aside\n{\n  height: 3rem;\n}\n\n.comment__main\n{\n  flex-grow: 1;\n}\n\n.comment__head\n{\n  margin-bottom: var(--margin);\n}\n\n.comment__vote\n{\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: var(--very-light-gray-color);\n  border-radius: var(--border-radius);\n  overflow:hidden;\n}\n\n.comment__vote-button\n{\n  width: 2rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--light-greyish-blue-color);\n  fill: var(--light-greyish-blue-color);\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n}\n\n.comment__vote-button:hover\n{\n  color: var(--moderate-blue-color);\n  fill: var(--moderate-blue-color);\n  cursor: pointer;\n}\n\n.comment__vote-score\n{\n  color: var(--moderate-blue-color);\n  width: 2.25rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  position:relative;\n}\n.new-score {\n  position: absolute;\n  width: 2.25rem;\n  height: 2.5rem;\n  top:0;\n  left:0;\n  display: flex;\n  align-items: center;\n  margin-top:-4px;\n  justify-content:center;\n  transform:translateY(200px);\n}\n.comment__vote-score--upvote .new-score {\n  animation: upvote .25s ease-in-out 0s 1 both;\n}\n.comment__vote-score--downvote .new-score {\n  animation: downvote .25s ease-in-out 0s 1 both;\n}\n.comment__vote-score--upvote .old-score,\n.comment__vote-score--downvote .old-score {\n  animation: fadeOut .25s ease-in-out 0s 1 both;\n}\n\n@keyframes upvote {\n  0% {\n    color:var(--moderate-blue-color);\n    transform:translateY(calc(0.5 * var(--margin)));\n    opacity:0;\n  }\n  50% {\n    color:var(--moderate-blue-color);\n  }\n  100% {\n    color: var(--moderate-blue-color);\n    transform: translateY(0px);\n    opacity:1;\n  }\n}\n@keyframes downvote {\n  0% {\n    color: var(--soft-red-color);\n    transform:translateY(calc(-.5 * var(--margin)));\n    opacity:0;\n  }\n  50% {\n    color: var(--soft-red-color);\n  }\n  100% {\n    color: var(--moderate-blue-color);\n    transform: translateY(0px);\n    opacity:1;\n  }\n}\n.comment__meta\n{\n  display: flex;\n  align-items: center;\n}\n\n.comment__user\n{\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  margin-right: var(--margin);\n}\n\n.comment__username\n{\n  display: inline-block;\n}\n\n.comment__tag\n{\n  font-size: 12px;\n  color: var(--white-color);\n  background-color: var(--moderate-blue-color);\n  padding: 0 8px;\n  border-radius: calc(var(--border-radius)*.5);\n  display: inline-block;\n}\n\n.comment__tag--owner\n{\n  margin-left: var(--spacing);\n}\n\n.comment__avatar\n{\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.comment__avatar--with-username\n{\n  margin-right: var(--margin);\n}\n\n.comment__age,\n.comment__body\n{\n  color: var(--grayish-blue-color);\n}\n\n.comment__interactions\n{\n  display: flex;\n  position: absolute;\n  right: calc(var(--margin)*2);\n  bottom: calc(var(--margin));\n  height: 2.5rem;\n  align-items: center;\n}\n\n.comment__quick-button\n{\n  background-color: transparent;\n  border: none;\n  font-size:16px;\n  color: var(--moderate-blue-color);\n  fill: var(--moderate-blue-color);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  margin-left: var(--margin);\n  cursor: pointer;\n}\n\n.comment__quick-button:hover\n{\n  color: var(--light-greyish-blue-color);\n  fill: var(--light-greyish-blue-color);\n  cursor: pointer;\n}\n\n.comment__quick-button svg\n{\n  display: inline-block;\n  margin-right: calc(var(--margin)/2);\n}\n\n.comment__quick-button--delete\n{\n  color: var(--soft-red-color);\n  fill: var(--soft-red-color);\n}\n\n.comment__quick-button--delete:hover\n{\n  color: var(--pale-red-color);\n  fill: var(--pale-red-color);\n}\n\n.comment__input\n{\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.comment__input-container\n{\n  width: 100%;\n}\n\n.comment__input-text\n{\n  width: 100%;\n  font-family: 'Rubik', sans-serif;\n  color: var(--dark-blue-color);\n  font-size: 1rem;\n  min-height: 6rem;\n  display: block;\n  resize: vertical;\n  border-color: var(--light-gray-color);\n  border-radius: var(--border-radius);\n  padding: var(--margin) calc(var(--margin)*1.5);\n}\n\n.comment__input-text:hover,\n.comment__input-text:focus\n{\n  border: 1px solid var(--grayish-blue-color);\n  outline: none;\n}\n\n.comment__input-button\n{\n  background-color: var(--grayish-blue-color);\n  color: var(--white-color);\n  border: none;\n  border-radius: var(--border-radius);\n  text-transform: uppercase;\n  width: 6.5rem;\n  height: 3rem;\n  font-size: 14px;\n  font-weight: 700;\n  position: absolute;\n  bottom: var(--margin);\n  right: var(--margin);\n  cursor: pointer;\n}\n\n.comment__input-button:disabled{\n  cursor: not-allowed;\n}\n\n.comment__input-button:hover,\n.comment__input-button:disabled\n{\n  background-color: var(--dark-blue-color);\n}\n\n.comment__input-button--primary\n{\n  background-color: var(--moderate-blue-color);\n}\n\n.comment__input-button--primary:hover,\n.comment__input-button--primary:disabled\n{\n  background-color: var(--light-greyish-blue-color);\n}\n\n.comment__input-button--warning\n{\n  background-color: var(--soft-red-color);\n}\n\n.comment__input-button--warning:hover\n{\n  color: var(--dark-blue-color);\n  background-color: var(--pale-red-color);\n}\n\n.comment__input-update\n{\n  display: flex;\n  justify-content: flex-end;\n  margin-top: var(--margin);\n}\n\n.comment__modal-buttons\n{\n  display: flex;\n  justify-content: space-between;\n}\n\n.comment__modal-buttons .comment__input-button\n{\n  flex-grow: 1;\n}\n\n.comment__modal-buttons .comment__input-button:not(:last-child)\n{\n  margin-right: var(--margin);\n}\n\n@media screen and (min-width:600px)\n{\n  .comment\n  {\n    padding: calc(var(--margin)*1.2) calc(var(--margin)*1.5);\n    flex-direction: row;\n  }\n\n  .comment__aside\n  {\n    height: auto;\n    justify-content: flex-start;\n    margin-top: 0;\n    margin-right: calc(var(--margin)*1.5);\n  }\n\n  .comment__head\n  {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .comment__interactions\n  {\n    position: relative;\n    bottom: unset;\n    right: unset;\n  }\n\n  .comment__vote\n  {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .comment__vote-button\n  {\n    width: 2.5rem;\n    height: 2rem;\n    background-color: transparent;\n    border: none;\n  }\n\n  .comment__vote-button:hover\n  {\n    color: var(--moderate-blue-color);\n    fill: var(--moderate-blue-color);\n    cursor: pointer;\n  }\n\n  .comment__vote-score\n  {\n    color: var(--moderate-blue-color);\n    height: 2rem;\n  }\n\n  .comment__avatar--current\n  {\n    width: 40px;\n    height: 40px;\n  }\n\n  .comment__input\n  {\n    flex-direction: row;\n    align-items: flex-start;\n  }\n\n  .comment__input-container\n  {\n    margin-bottom: 0;\n    margin-right: var(--margin);\n  }\n\n  .comment__input-button\n  {\n    position: relative;\n    bottom: unset;\n    right: unset;\n  }\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_components_Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/components/Comments */ "./src/js/components/Comments.js");
/* harmony import */ var _js_components_Reply__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/components/Reply */ "./src/js/components/Reply.js");
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data.json */ "./src/data.json");
var _data_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ "./src/data.json", 1);



var _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/App.js";





function App() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(_data_json__WEBPACK_IMPORTED_MODULE_7__),
    _useState2 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    commentsData = _useState2[0],
    setCommentsData = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(5),
    _useState4 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    newId = _useState4[0],
    setNewId = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState6 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    reset = _useState6[0],
    setReset = _useState6[1];
  var handleAddComment = function handleAddComment(comment) {
    setCommentsData(function (prevState) {
      return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
        comments: [].concat(Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.comments), [comment])
      });
    });
    localStorage.setItem('commentsData', commentsData);
    setNewId(function (prevState) {
      return prevState + 1;
    });
  };
  var handleReset = function handleReset() {
    setReset(true);
    localStorage.clear();
    window.location.reload();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "app",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, commentsData.comments ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_js_components_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
    currentUser: commentsData.currentUser,
    comments: commentsData.comments,
    newId: newId,
    reset: reset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("em", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, "No comments yet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_js_components_Reply__WEBPACK_IMPORTED_MODULE_6__["default"], {
    newId: newId,
    onSubmit: handleAddComment,
    type: "send",
    currentUser: commentsData.currentUser,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Reset Stores",
    className: "reset",
    onClick: handleReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "attribution",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Challenge by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://www.frontendmentor.io?ref=challenge",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 24
    }
  }, "Frontend Mentor"), ". Coded by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
    href: "https://twitter.com/mixchex",
    target: "_blank",
    rel: "noopener noreferrer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 20
    }
  }, "Mike Cheshire"), ".")));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/*! exports provided: currentUser, comments, default */
/***/ (function(module) {

module.exports = {"currentUser":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"},"comments":[{"id":1,"content":"Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.","createdAt":"1 month ago","score":12,"user":{"image":{"png":"./images/avatars/image-amyrobson.png","webp":"./images/avatars/image-amyrobson.webp"},"username":"amyrobson"},"replies":[]},{"id":2,"content":"Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!","createdAt":"2 weeks ago","score":5,"user":{"image":{"png":"./images/avatars/image-maxblagun.png","webp":"./images/avatars/image-maxblagun.webp"},"username":"maxblagun"},"replies":[{"id":3,"content":"If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.","createdAt":"1 week ago","score":4,"replyingTo":"maxblagun","user":{"image":{"png":"./images/avatars/image-ramsesmiron.png","webp":"./images/avatars/image-ramsesmiron.webp"},"username":"ramsesmiron"}},{"id":4,"content":"I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.","createdAt":"2 days ago","score":2,"replyingTo":"ramsesmiron","user":{"image":{"png":"./images/avatars/image-juliusomo.png","webp":"./images/avatars/image-juliusomo.webp"},"username":"juliusomo"}}]}]};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
var _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/index.js";





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }
})));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/js/components/Comment.js":
/*!**************************************!*\
  !*** ./src/js/components/Comment.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Reply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Reply */ "./src/js/components/Reply.js");
/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comments */ "./src/js/components/Comments.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modal */ "./src/js/components/Modal.js");



var _this = undefined,
  _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/js/components/Comment.js";




var Comment = function Comment(_ref) {
  var comment = _ref.comment,
    currentUser = _ref.currentUser,
    newId = _ref.newId;
  var commentId = "commentId".concat(comment.id);
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(comment),
    _useState2 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    commentData = _useState2[0],
    setCommentData = _useState2[1];
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState4 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    reply = _useState4[0],
    setReply = _useState4[1];
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState6 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    editing = _useState6[0],
    setEditing = _useState6[1];
  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
      'height': '96px'
    }),
    _useState8 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    textareaStyles = _useState8[0],
    setTextareaStyles = _useState8[1];
  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState10 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState9, 2),
    showModal = _useState10[0],
    setShowModal = _useState10[1];
  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
    _useState12 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState11, 2),
    deletedComment = _useState12[0],
    setDeletedComment = _useState12[1];
  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('comment-group'),
    _useState14 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState13, 2),
    commentGroupClasses = _useState14[0],
    setCommentGroupClasses = _useState14[1];
  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('comment__vote-score'),
    _useState16 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState15, 2),
    commentVoteClasses = _useState16[0],
    setCommentVoteClasses = _useState16[1];
  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('comment-group'),
    _useState18 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState17, 2),
    replyGroupClasses = _useState18[0],
    setReplyGroupClasses = _useState18[1];
  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(commentData.content),
    _useState20 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState19, 2),
    commentEditContent = _useState20[0],
    setCommentEditContent = _useState20[1];
  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
    _useState22 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState21, 2),
    tempNewScore = _useState22[0],
    setTempNewScore = _useState22[1];
  var updateTextareaRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setComment();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (editing) {
      setTextareaStyles({
        'height': updateTextareaRef.current.scrollHeight + 2 + "px"
      });
    }
  }, [editing]);
  var handleCommentUpdate = function handleCommentUpdate() {
    var updatedComment = function updatedComment(prevState) {
      return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
        content: commentEditContent
      });
    };
    setCommentData(updatedComment(comment));
    localStorage.setItem(commentId + 'comment', commentEditContent);
    setEditing(false);
  };
  var handleCommentDelete = function handleCommentDelete() {
    setShowModal(false);
    setCommentGroupClasses('comment-group comment-group--delete');
    setTimeout(function () {
      setDeletedComment(true);
    }, 2000);
  };
  var handleDownVote = function handleDownVote() {
    var newScore = commentData.score - 1;
    // animate upvote
    setTempNewScore(newScore);
    setCommentVoteClasses('comment__vote-score comment__vote-score--downvote');
    setTimeout(function () {
      setCommentData(function (prevState) {
        return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
          score: newScore
        });
      });
      setCommentVoteClasses('comment__vote-score');
    }, 500);
    localStorage.setItem(commentId + 'score', newScore);
  };
  var handleUpVote = function handleUpVote() {
    var newScore = commentData.score + 1;
    // animate upvote
    setTempNewScore(newScore);
    setCommentVoteClasses('comment__vote-score comment__vote-score--upvote');

    // set upvote

    setTimeout(function () {
      setCommentData(function (prevState) {
        return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
          score: newScore
        });
      });
      setCommentVoteClasses('comment__vote-score');
    }, 500);
    localStorage.setItem(commentId + 'score', newScore);
  };
  var handleNewReply = function handleNewReply(reply) {
    setCommentData(function (prevState) {
      return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
        replies: [].concat(Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.replies), [reply.comment])
      });
    });
    localStorage.setItem(commentId, commentData);
    setReplyGroupClasses('comment-group comment-group--close');
    setTimeout(function () {
      setReply(false);
    }, 1500);
  };
  var setComment = function setComment() {
    if (localStorage.getItem(commentId + 'score') !== null) {
      setCommentData(function (prevState) {
        return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
          score: parseInt(localStorage.getItem(commentId + 'score'))
        });
      });
    }
    if (localStorage.getItem(commentId + 'comment') !== null) {
      setCommentData(function (prevState) {
        return Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prevState, {
          content: localStorage.getItem(commentId + 'comment')
        });
      });
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    show: showModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", {
    className: "modal__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, "Delete comment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  }, "Are you sure you want to delete this comment? This will remove the comment and can\u2019t be undone."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__modal-buttons",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Cancel Comment Deletion",
    onClick: function onClick() {
      return setShowModal(false);
    },
    className: "comment__input-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, "No, Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Confirm Comment Deletion",
    onClick: handleCommentDelete,
    className: "comment__input-button comment__input-button--warning",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "Yes, Delete"))), !deletedComment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: commentGroupClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__aside",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__vote",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Upvote Comment",
    onClick: handleUpVote,
    className: "comment__vote-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "11",
    height: "11",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 100
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 37
    }
  }, "Upvote Comment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: commentVoteClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "old-score",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 37
    }
  }, commentData.score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "new-score",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 37
    }
  }, tempNewScore)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Downvote Comment",
    onClick: handleDownVote,
    className: "comment__vote-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "11",
    height: "3",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 99
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "sr-only",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 37
    }
  }, "Downvote Comment")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__meta",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__user",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: commentData.user.image.png,
    alt: commentData.user.username,
    className: "comment__avatar comment__avatar--with-username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 41
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "comment__username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 41
    }
  }, commentData.user.username), commentData.user.username === currentUser.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "comment__tag comment__tag--owner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }, "you")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "comment__age",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 37
    }
  }, commentData.createdAt)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__interactions",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 33
    }
  }, commentData.user.username === currentUser.username ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Delete Your Comment",
    onClick: function onClick() {
      return setShowModal(true);
    },
    className: "comment__quick-button comment__quick-button--delete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "12",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 112
    }
  })), "Delete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Edit Your Comment",
    onClick: function onClick() {
      setEditing(!editing);
      setCommentEditContent(commentData.content);
    },
    className: "comment__quick-button comment__quick-button--edit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "14",
    height: "14",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 49
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 112
    }
  })), "Edit")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Reply to Comment",
    onClick: function onClick() {
      return setReply(!reply);
    },
    className: "comment__quick-button comment__quick-button--reply",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("svg", {
    width: "14",
    height: "13",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 45
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("path", {
    d: "M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 108
    }
  })), "Reply"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 29
    }
  }, editing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "replyToComment".concat(commentData.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 45
    }
  }, "Edit reply"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("textarea", {
    id: "replyToComment".concat(commentData.id),
    name: "reply",
    ref: updateTextareaRef,
    className: "comment__input-text",
    style: textareaStyles,
    value: commentEditContent,
    onChange: function onChange(e) {
      return setCommentEditContent(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 45
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "comment__input-update",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 41
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    "aria-label": "Update Comment",
    onClick: handleCommentUpdate,
    className: "comment__input-button comment__input-button--primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 45
    }
  }, "Update"))) : commentData.content))), reply && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: replyGroupClasses,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 31
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Reply__WEBPACK_IMPORTED_MODULE_4__["default"], {
    newId: newId,
    comment: comment,
    currentUser: currentUser,
    onSubmit: handleNewReply,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 66
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Comments__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: commentData.id,
    currentUser: currentUser,
    comments: commentData.replies,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/js/components/Comments.js":
/*!***************************************!*\
  !*** ./src/js/components/Comments.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comment */ "./src/js/components/Comment.js");
var _this = undefined,
  _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/js/components/Comments.js";


var Comments = function Comments(_ref) {
  var _ref$comments = _ref.comments,
    comments = _ref$comments === void 0 ? [] : _ref$comments,
    currentUser = _ref.currentUser,
    reset = _ref.reset,
    newId = _ref.newId;
  return comments.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "comments",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, comments.map(function (comment, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Comment__WEBPACK_IMPORTED_MODULE_1__["default"], {
      comment: comment,
      currentUser: currentUser,
      newId: newId,
      reset: reset,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }));
  })) : null;
};
/* harmony default export */ __webpack_exports__["default"] = (Comments);

/***/ }),

/***/ "./src/js/components/Modal.js":
/*!************************************!*\
  !*** ./src/js/components/Modal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
  _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/js/components/Modal.js";

var Modal = function Modal(_ref) {
  var children = _ref.children,
    _ref$show = _ref.show,
    show = _ref$show === void 0 ? false : _ref$show;
  return show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overlay",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, children));
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);

/***/ }),

/***/ "./src/js/components/Reply.js":
/*!************************************!*\
  !*** ./src/js/components/Reply.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _this = undefined,
  _jsxFileName = "/Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/js/components/Reply.js";

var Reply = function Reply(_ref) {
  var comment = _ref.comment,
    currentUser = _ref.currentUser,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "reply" : _ref$type,
    onSubmit = _ref.onSubmit,
    newId = _ref.newId;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
    _useState2 = Object(_Users_michaelcheshire_Projects_FEMentor_fem_interactive_comments_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    textareaValue = _useState2[0],
    setTextareaValue = _useState2[1];
  var fieldId = type === 'reply' ? "replyToComment".concat(comment.id) : 'addComment';
  var labelText = type === 'reply' ? "Reply to ".concat(comment.user.username) : 'Add your comment';
  var placeholderText = type === 'reply' ? 'Add a reply...' : 'Add a comment...';
  var submitData = function submitData() {
    var data = {};
    data = {
      "id": newId,
      "content": textareaValue,
      "createdAt": "now",
      "score": 0,
      "user": currentUser,
      "replies": []
    };
    setTextareaValue('');
    if (type === 'reply') {
      data.replyingTo = comment.user.username;
      return {
        id: comment.id,
        comment: data
      };
    } else {
      return data;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment comment--reply",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment__aside",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: currentUser.image.png,
    alt: currentUser.username,
    className: "comment__avatar comment__avatar--current",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment__main",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment__input",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "comment__input-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: fieldId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, labelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
    id: fieldId,
    name: "reply",
    className: "comment__input-text",
    placeholder: placeholderText,
    value: textareaValue,
    onChange: function onChange(e) {
      return setTextareaValue(e.target.value);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    "aria-label": "".concat(type === 'reply' ? 'Reply to Comment' : 'Send New Comment'),
    disabled: textareaValue === '',
    onClick: function onClick() {
      return onSubmit(submitData());
    },
    className: "comment__input-button comment__input-button--primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, type === 'reply' ? 'Reply' : 'Send'))));
};
/* harmony default export */ __webpack_exports__["default"] = (Reply);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
        getFID = _ref.getFID,
        getFCP = _ref.getFCP,
        getLCP = _ref.getLCP,
        getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelcheshire/Projects/FEMentor/fem-interactive-comments/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",2]]]);
//# sourceMappingURL=main.chunk.js.map