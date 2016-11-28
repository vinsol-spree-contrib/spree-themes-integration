'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultParams = {
  domain: 'http://localhost:3002',
  regex: /[(:)](.*)[(\/)*]/g,
  userId: '26e50aa3534d354f59eb75c890e90a30b0b6935a26092bfe',
  productsList: {
    path: '/api/ams/products/',
    method: 'GET',
    params: {
      page: 1,
      per_page: 25
    }
  },
  productShow: {
    path: '/api/ams/products/:id/',
    method: 'GET',
    params: {
      id: 1
    }
  },
  optionTypesList: {
    path: '/api/option_types/',
    method: 'GET'
  },
  addressShow: {
    path: '/api/addresses',
    method: 'GET'
  },
  countryLists: {
    path: '/api/ams/countries',
    method: 'GET',
    params: {
      page: 1,
      per_page: 250
    }
  },
  statesList: {
    path: '/api/ams/countries/:id/',
    method: 'GET',
    params: {
      id: 232
    }
  },
  signUp: {
    path: '/api/ams/users/',
    method: 'POST',
    params: {
      user: {
        email: '2'
      }
    }
  },
  login: {
    path: '/api/ams/users/token',
    method: 'POST',
    params: {
      email: 'example@example.com',
      password: 'spreetest'
    }
  },
  myOrders: {
    protectedAction: true,
    path: '/api/orders/',
    method: 'GET'
  },
  currentOrder: {
    protectedAction: true,
    path: '/api/orders/current',
    method: 'GET'
  },
  profile: {
    protectedAction: true,
    path: '/api/users/profile',
    method: 'GET'
  },
  createOrder: {
    protectedAction: true,
    path: '/api/ams/orders',
    method: 'POST'
  },
  updateOrder: {
    protectedAction: true,
    path: '/api/ams/orders/:id/',
    method: 'PUT'
  },
  checkoutOrder: {
    protectedAction: true,
    path: '/api/ams/checkouts/:id/next',
    method: 'PUT'
  },
  taxonsList: {
    path: '/api/ams/taxons/',
    method: 'GET'
  },
  taxonomyList: {
    path: '/api/ams/taxonomies/',
    method: 'GET'
  },
  emptyOrder: {
    protectedAction: true,
    path: '/api/orders/:id/empty',
    method: 'PUT'
  },
  deleteOrder: {
    protectedAction: true,
    path: '/api/orders/:id/cancel',
    method: 'PUT'
  }
};

exports.default = defaultParams;