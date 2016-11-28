import defaultParams from './defaultParams'
import param from './param'
import { getCookie } from './cookieStore'

class SpreeApi {
  constructor(domain) {
    this.domain = domain || defaultParams['domain'];
    this.protectedAction = defaultParams[this.constructor.name]['protectedAction']
  }

  url(path, params) {
    path = path || defaultParams[this.constructor.name]['path']
    if(this.urlOptions !== undefined){
      path = path.replace(defaultParams['regex'], this.urlOptions(params)["id"] + '/')
    }
    return this.domain + path
  }

  method(method) {
    return method || defaultParams[this.constructor.name]['method']
  }

  processParams(params) {
    return param(params)
  }

  checkAuthentication() {
    if(this.protectedAction && getCookie('auth_token') === ''){
      console.log('Please Login')
      return false;
    }
    return true;
  }

  sendRequest({path, method, params, cb}) {
    params = params || {};
    if(this.checkAuthentication()){
      this.ajax(this.url(path, params), this.method(), this.processParams(params), cb);
    }
  }

  userID(params){
    return getCookie('auth_token') || params['userId'] || defaultParams['userId']
  }

  ajax(url, method = "GET", params={}, cb) {
    let xhttp = new XMLHttpRequest(),
        _this = this;
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && (this.status >= 200 || this.status < 300) ) {
        console.log(this.responseText);
        if(_this.handleResponse !== undefined) {
          _this.handleResponse(JSON.parse(this.responseText))
        }
        if(cb !== undefined){
          cb(JSON.parse(this.responseText))
        }
        return this.responseText
      } else if (this.readyState == 4 && this.status == 500 ) {
        console.log('Oops something went wrong!')
      } else if (this.readyState == 4 && (this.status >= 400 || this.status < 500) ) {
        console.log('Errors present')
      }
    };
    xhttp.open(method, url + '?' + params, true);
    xhttp.setRequestHeader('X-Spree-Token', this.userID(params))
    xhttp.withCredentials = true;
    xhttp.send(params);
  }
};

export default SpreeApi
