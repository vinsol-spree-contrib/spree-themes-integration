import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.deleteOrder = class deleteOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
  urlOptions(params) {
    return { id: params['id'] }
  }
};

export default SpreeApi.deleteOrder
