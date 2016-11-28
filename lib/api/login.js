import SpreeApi from './../spreeApi'
import param from './../param'
import { setCookie } from './../cookieStore'

SpreeApi.login = class login extends SpreeApi {
  constructor(domain) {
    super(domain)
  }

  handleResponse(responseText) {
    setCookie('auth_token', responseText.token)
  }
};

export default SpreeApi.login
