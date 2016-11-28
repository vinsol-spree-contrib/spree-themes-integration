import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.productShow = class productShow extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  urlOptions(params) {
    return { id: params['id'] || defaultParams['productShow']['params']['id'] }
  }

};

export default SpreeApi.productShow
