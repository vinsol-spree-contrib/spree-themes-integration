import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.countryLists = class countryLists extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  processParams(params) {
    params['page'] = params['page'] || defaultParams[this.constructor.name]['params']['page']
    params['per_page'] = params['per_page'] || defaultParams[this.constructor.name]['params']['per_page']
    return param(params)
  }
};

export default SpreeApi.countryLists
