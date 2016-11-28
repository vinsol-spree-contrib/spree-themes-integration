import SpreeApi from './../spreeApi'
import param from './../param'

SpreeApi.createOrder = class createOrder extends SpreeApi {
  constructor(domain) {
    super(domain)
  }
};

export default SpreeApi.createOrder
