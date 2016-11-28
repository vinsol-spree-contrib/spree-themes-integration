import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.addressShow = class addressShow extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  processParams(params) {
    params['page'] = params['page'] || defaultParams['productsList']['params']['page']
    params['per_page'] = params['per_page'] || defaultParams['productsList']['params']['per_page']
    return param(params)
  }

};

export default SpreeApi.addressShow
