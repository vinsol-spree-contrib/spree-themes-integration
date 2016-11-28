import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.emptyOrder = class emptyOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
  urlOptions(params) {
    return { id: params['id'] }
  }
};

export default SpreeApi.emptyOrder
