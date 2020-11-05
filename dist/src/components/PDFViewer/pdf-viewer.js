"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/pdf-viewer.css");

var _AppBar = _interopRequireDefault(require("./AppBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PDFView = function PDFView(props) {
  var _pdfRef$_pdfInfo;

  var url = props.src,
      title = props.title,
      style = props.style;

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      pdfRef = _useState2[0],
      setPdf = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      zoom = _useState4[0],
      setZoom = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      currentPage = _useState6[0],
      setCurrentPage = _useState6[1];

  var canvasEl = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    function setup() {
      return _setup.apply(this, arguments);
    }

    function _setup() {
      _setup = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var pdfjs;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('pdfjs-dist/build/pdf'));
                });

              case 2:
                pdfjs = _context.sent;
                _context.next = 5;
                return Promise.resolve().then(function () {
                  return _interopRequireWildcard(require('pdfjs-dist/build/pdf.worker.entry'));
                });

              case 5:
                pdfjs.getDocument(url).promise.then(function (pdf) {
                  setPdf(pdf);
                }).catch(function (e) {
                  return alert('Something went wrong. Could not fetch file');
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _setup.apply(this, arguments);
    }

    setup();
  }, [url]);

  var render = function render() {
    if (!pdfRef) return;
    pdfRef.getPage(currentPage).then(function (page) {
      var canvas = canvasEl.current;
      var ctx = canvas.getContext('2d');
      var viewport = page.getViewport({
        scale: zoom
      });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      page.render({
        canvasContext: ctx,
        viewport: viewport
      });
    }).catch(function (e) {
      return alert(e);
    });
  };

  (0, _react.useEffect)(render, [currentPage, zoom, pdfRef]);

  var nextPage = function nextPage() {
    if (!pdfRef) return;

    if (currentPage >= pdfRef._pdfInfo.numPages) {
      return;
    }

    setCurrentPage(currentPage + 1);
  };

  var prevPage = function prevPage() {
    if (!pdfRef) return;
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  var skipTo = function skipTo(e) {
    var pageRequest = +e.target.textContent; //coerce to int

    if (isNaN(pageRequest) || !pdfRef) return;
    if (pageRequest > pdfRef._pdfInfo.numPages || pageRequest < 1) return;
    setCurrentPage(pageRequest);
  };

  var scale = function scale(val) {
    return setZoom(function (state) {
      return state * val;
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: _objectSpread({}, style)
  }, /*#__PURE__*/_react.default.createElement(_AppBar.default, {
    nextPage: nextPage,
    prevPage: prevPage,
    skipToPage: skipTo,
    scale: scale,
    title: title,
    pageNumber: currentPage,
    totalPages: pdfRef === null || pdfRef === void 0 ? void 0 : (_pdfRef$_pdfInfo = pdfRef._pdfInfo) === null || _pdfRef$_pdfInfo === void 0 ? void 0 : _pdfRef$_pdfInfo.numPages
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "canvas-container"
  }, /*#__PURE__*/_react.default.createElement("canvas", {
    ref: canvasEl,
    onContextMenu: function onContextMenu(e) {
      return e.preventDefault();
    }
  })));
};

PDFView.prototype = {
  src: _propTypes.default.string.isRequired,
  styles: _propTypes.default.object
};
var _default = PDFView;
exports.default = _default;

//# sourceMappingURL=pdf-viewer.jsx.map