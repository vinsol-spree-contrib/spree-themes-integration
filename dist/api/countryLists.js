'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _spreeApi = require('./../spreeApi');

var _spreeApi2 = _interopRequireDefault(_spreeApi);

var _param = require('./../param');

var _param2 = _interopRequireDefault(_param);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

_spreeApi2.default.countryLists = function (_SpreeApi) {
  _inherits(countryLists, _SpreeApi);

  function countryLists(domain) {
    _classCallCheck(this, countryLists);

    return _possibleConstructorReturn(this, (countryLists.__proto__ || Object.getPrototypeOf(countryLists)).call(this, domain));
  }

  _createClass(countryLists, [{
    key: 'processParams',
    value: function processParams(params) {
      params['page'] = params['page'] || defaultParams[this.constructor.name]['params']['page'];
      params['per_page'] = params['per_page'] || defaultParams[this.constructor.name]['params']['per_page'];
      return (0, _param2.default)(params);
    }
  }]);

  return countryLists;
}(_spreeApi2.default);

exports.default = _spreeApi2.default.countryLists;