'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spreeApi = require('./../spreeApi');

var _spreeApi2 = _interopRequireDefault(_spreeApi);

var _param = require('./../param');

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_spreeApi2.default.currentOrder = function (_SpreeApi) {
  _inherits(currentOrder, _SpreeApi);

  function currentOrder(domain) {
    _classCallCheck(this, currentOrder);

    return _possibleConstructorReturn(this, (currentOrder.__proto__ || Object.getPrototypeOf(currentOrder)).call(this, domain));
  }

  return currentOrder;
}(_spreeApi2.default);

exports.default = _spreeApi2.default.currentOrder;