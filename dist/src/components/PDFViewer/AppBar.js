"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles/AppBar.css");

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppBar = function AppBar(props) {
  // prettier-ignore
  var title = props.title,
      nextPage = props.nextPage,
      prevPage = props.prevPage,
      skipToPage = props.skipToPage,
      scale = props.scale,
      pageNumber = props.pageNumber,
      totalPages = props.totalPages; // prettier-ignore

  var controls = [{
    name: 'Previous page Page',
    src: 'metro/26/000000/long-arrow-left.png',
    onClick: prevPage
  }, {
    name: 'Next Page',
    src: 'metro/26/000000/long-arrow-right.png',
    onClick: nextPage
  }, {
    name: 'Zoom in',
    src: 'ios-filled/26/000000/zoom-in.png',
    onClick: scale.bind(_this, 1.2)
  }, {
    name: 'Zoom out',
    src: 'ios/26/000000/zoom-out.png',
    onClick: scale.bind(_this, 0.8)
  }];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content flex-container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title"
  }, title !== null && title !== void 0 ? title : 'Document Title'), /*#__PURE__*/_react.default.createElement("div", {
    className: "page-no"
  }, "Page", ' ', /*#__PURE__*/_react.default.createElement("span", {
    contentEditable: true,
    onKeyPress: skipToPage
  }, pageNumber), ' ', "of ", totalPages || 'loading...'), /*#__PURE__*/_react.default.createElement("div", {
    className: "controls"
  }, controls.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "tooltip m-1",
      onClick: item.onClick,
      key: item.name
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: 'https://img.icons8.com/' + item.src,
      alt: item.name
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "tooltiptext"
    }, item.name));
  }))));
};

AppBar.prototype = {
  title: _propTypes.default.string,
  nextPage: _propTypes.default.func.isRequired,
  prevPage: _propTypes.default.func.isRequired,
  skipToPage: _propTypes.default.func.isRequired,
  scale: _propTypes.default.func.isRequired,
  pageNumber: _propTypes.default.number.isRequired,
  totalPages: _propTypes.default.number.isRequired
};
var _default = AppBar;
exports.default = _default;

//# sourceMappingURL=AppBar.jsx.map