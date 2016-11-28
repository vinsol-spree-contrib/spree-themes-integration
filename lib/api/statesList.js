import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.statesList = class statesList extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  urlOptions(params) {
    return { id: params['id'] || defaultParams[this.constructor.name]['params']['id'] }
  }
};

export default SpreeApi.statesList
