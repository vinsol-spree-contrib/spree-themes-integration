import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.checkoutOrder = class checkoutOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  urlOptions(params) {
    return { id: params['id'] }
  }

  processParams(params) {
    params['order'] = {}
    params['order']['bill_address_attributes'] = params['bill_address_attributes']
    params['order']['ship_address_attributes'] = params['ship_address_attributes']
    params['order']['payments_attributes'] = params['payments_attributes']
    params['order']['shipments_attributes'] = params['shipments_attributes']
    return param(params)
  }

};

export default SpreeApi.checkoutOrder
