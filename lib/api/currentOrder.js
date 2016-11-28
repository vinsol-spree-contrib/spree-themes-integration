import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.currentOrder = class currentOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.currentOrder
