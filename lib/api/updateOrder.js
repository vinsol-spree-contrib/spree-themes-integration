import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.updateOrder = class updateOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  urlOptions(params) {
    return { id: params['id'] }
  }

  processParams(params) {
    params['order'] = {}
    params['order']['line_items_attributes'] = params['line_items_attributes']
    return param(params)
  }

};

export default SpreeApi.updateOrder
