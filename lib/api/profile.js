import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.profile = class profile extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.profile
