'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCookie = exports.setCookie = undefined;

var _tea = require('./tea');

var _tea2 = _interopRequireDefault(_tea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + _tea2.default.encrypt(cvalue, '');
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return _tea2.default.decrypt(c.substring(name.length, c.length), '');
        }
    }
    return "";
}

exports.setCookie = setCookie;
exports.getCookie = getCookie;