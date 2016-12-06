'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultParams = require('./defaultParams');

var _defaultParams2 = _interopRequireDefault(_defaultParams);

var _param = require('./param');

var _param2 = _interopRequireDefault(_param);

var _cookieStore = require('./cookieStore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpreeApi = function () {
  function SpreeApi(domain) {
    _classCallCheck(this, SpreeApi);

    this.domain = domain || _defaultParams2.default['domain'];
    this.protectedAction = _defaultParams2.default[this.constructor.name]['protectedAction'];
  }

  _createClass(SpreeApi, [{
    key: 'url',
    value: function url(path, params) {
      path = path || _defaultParams2.default[this.constructor.name]['path'];
      if (this.urlOptions !== undefined) {
        path = path.replace(_defaultParams2.default['regex'], this.urlOptions(params)["id"] + '/');
      }
      return this.domain + path;
    }
  }, {
    key: 'method',
    value: function method(_method) {
      return _method || _defaultParams2.default[this.constructor.name]['method'];
    }
  }, {
    key: 'processParams',
    value: function processParams(params) {
      return (0, _param2.default)(params);
    }
  }, {
    key: 'checkAuthentication',
    value: function checkAuthentication() {
      if (this.protectedAction && (0, _cookieStore.getCookie)('auth_token') === '') {
        console.log('Please Login');
        return false;
      }
      return true;
    }
  }, {
    key: 'sendRequest',
    value: function sendRequest(_ref) {
      var path = _ref.path,
          method = _ref.method,
          params = _ref.params,
          cb = _ref.cb;

      params = params || {};
      if (this.checkAuthentication()) {
        this.ajax(this.url(path, params), this.method(), this.processParams(params), cb);
      }
    }
  }, {
    key: 'userID',
    value: function userID(params) {
      return (0, _cookieStore.getCookie)('auth_token') || params['userId'] || _defaultParams2.default['userId'];
    }
  }, {
    key: 'ajax',
    value: function ajax(url) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "GET";
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var cb = arguments[3];

      var xhttp = new XMLHttpRequest(),
          _this = this;
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && (this.status >= 200 || this.status < 300)) {
          console.log(this.responseText);
          if (_this.handleResponse !== undefined) {
            _this.handleResponse(JSON.parse(this.responseText));
          }
          if (cb !== undefined) {
            cb(JSON.parse(this.responseText));
          }
          return this.responseText;
        } else if (this.readyState == 4 && this.status == 500) {
          console.log('Oops something went wrong!');
        } else if (this.readyState == 4 && (this.status >= 400 || this.status < 500)) {
          console.log('Errors present');
        }
      };
      xhttp.open(method, url + '?' + params, true);
      xhttp.setRequestHeader('X-Spree-Token', this.userID(params));
      xhttp.send(params);
    }
  }]);

  return SpreeApi;
}();

;

exports.default = SpreeApi;
