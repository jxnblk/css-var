'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _require = require('react'),
    Component = _require.Component;

var cv = require('css-var');

module.exports = function (_Component) {
  _inherits(CSSVar, _Component);

  function CSSVar() {
    _classCallCheck(this, CSSVar);

    return _possibleConstructorReturn(this, (CSSVar.__proto__ || Object.getPrototypeOf(CSSVar)).apply(this, arguments));
  }

  _createClass(CSSVar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      cv(this.props.vars);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(next) {
      if (next.vars !== this.props.vars) {
        cv(next.vars);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return false;
    }
  }]);

  return CSSVar;
}(Component);