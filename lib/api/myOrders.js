import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.myOrders = class myOrders extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.myOrders
