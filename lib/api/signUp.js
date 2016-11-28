import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.signUp = class signUp extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  processParams(params) {
    params['user']['email'] = params['user']['email'] || defaultParams[this.constructor.name]['params']['user']['email']
    params['user']['password'] = params['user']['password'] || defaultParams[this.constructor.name]['params']['user']['password']
    return param(params)
  }
};

export default SpreeApi.signUp
