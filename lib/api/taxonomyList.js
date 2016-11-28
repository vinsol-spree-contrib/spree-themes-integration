import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.taxonomyList = class taxonomyList extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.taxonomyList
