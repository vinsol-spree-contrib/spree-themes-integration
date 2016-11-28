import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.taxonsList = class taxonsList extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.taxonsList
