import SpreeApi from './../spreeApi'
import defaultParams from './../defaultParams'
import param from './../param'

SpreeApi.productsTaxonList = class productsTaxonList extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  processParams(params) {
    params['page'] = params['page'] || defaultParams['productsTaxonList']['params']['page']
    params['per_page'] = params['per_page'] || defaultParams['productsTaxonList']['params']['per_page']
    return param(params)
  }

};

export default SpreeApi.productsTaxonList
