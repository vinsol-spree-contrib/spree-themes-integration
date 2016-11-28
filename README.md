# [Spree Frontend Integration](https://github.com/vinsol-spree-contrib/spree-themes-integration)

spree-frontend-integration is a JavaScript library which allows easy access to Spree API. It can be integrated with any frontend framework, or can also be used with simple JS.

## Dependency

You need to install [Spree AMS](https://github.com/vinsol/spree_ams) gem.

## Configurations

**[Spree Frontend Integration](https://github.com/vinsol-spree-contrib/spree-themes-integration)** Provides a number of configurations which allow you to customize the integration according to your needs.

To access all endpoints add below line of code in your routes.rb.

```
namespace :api do
  match '*path' => 'ams/cors#preflight_check', via: [:options]
end
```

| Option | Description | Example
| --- | --- | --- |
| domain | In case your your backend & frontend are on different servers you will need to use this option & pass your backend domain to the integration when invoking the class. | (new SpreeApi.productsList('www.vinsol.com'))
| callback | To handle the response returned from the API, you need to pass a callback method, which will be invoked after successfull API call | (new SpreeApi.productsList('www.vinsol.com')).sendRequest({cb: myCallback}) |
| path | If you don't want to use default path(relative URL to the backend domain) for any of the API call you can overide this option. | (new SpreeApi.productsList('www.vinsol.com')).sendRequest({path: '/api/xx/products' }) |
| method | If you don't want to use default method. HTTP method to be used when hitting the API endpoint. | (new SpreeApi.productsList('www.vinsol.com')).sendRequest({method: 'GET' }) |

## List of JS methods
### SpreeApi.login

Use this method to login into Spree Backend. This methods needs to essential parameters ```email``` & ```password``` to successfully login. It actually saves token returned by Spree API to the cookie in encrypted form.

```
(SpreeApi.login()).sendRequest({params: {
  users: {
    email: 'spree@vinsol.com',
    password: 'spree123'
  }
}})
```

### SpreeApi.signUp

Use this method to signUp into Spree Backend. This methods needs to essential parameters ```email``` & ```password``` to successfully create a new user.

```
(SpreeApi.signUp()).sendRequest({params: {
  users: {
    email: 'spree@vinsol.com',
    password: 'spree123'
  }
}})
```

### SpreeApi.profile*

Use this method to get user details from Spree Backend.

```
(SpreeApi.profile()).sendRequest({})
```

### SpreeApi.productsList

Use this method to get a list of products from Spree Backend.

```
(SpreeApi.productsList()).sendRequest({params:{ per_page: 25, page: 1}})
```

### SpreeApi.productShow

Use this method to get details of a specific product from Spree Backend.
```
(SpreeApi.productShow()).sendRequest({params:{ id: 1 }})
Note: here id is product id/slug.
```

### SpreeApi.taxonsList

Use this method to get the taxon list from Spree Backend.

```
(SpreeApi.taxonsList()).sendRequest({})
```

### SpreeApi.taxonomyList

Use this method to get the taxonomy & taxons list from Spree Backend.

```
(SpreeApi.taxonomyList()).sendRequest({})
```

### SpreeApi.countryLists

Use this method to get a list of countries from Spree Backend.

```
(SpreeApi.countryLists()).sendRequest({})
```

### SpreeApi.statesList

Use this method to get a list of states for a specific country from Spree Backend.

```
(SpreeApi.statesList()).sendRequest({params: { id: 1 }})
Note: here id is country_id
```

### SpreeApi.optionTypesList

Use this method to get a list of option types from Spree Backend.

```
(SpreeApi.optionTypesList()).sendRequest({})
```

### SpreeApi.createOrder*

This method is to create a new order at Spree Backend and returns order response.

```
(SpreeApi.createOrder()).sendRequest({})
```

### SpreeApi.updateOrder*

This method is to update(Add a line item) a prevously created order at Spree Backend and returns order response.

```
(SpreeApi.updateOrder()).sendRequest({})
```

### SpreeApi.checkoutOrder*

This method should be used for checkout steps, with valid & complete information the order will be automatically proceeded to the next step. It returns the order response.

```
(SpreeApi.checkoutOrder()).sendRequest({params: {
  id: 1,
  bill_address_attributes: {...},
  ship_address_attributes: {...},
  payments_attributes: {...},
  shipments_attributes: {...}
}})
```

### SpreeApi.myOrders*

This method returns all completed orders of the loggedIn user.

```
(SpreeApi.myOrders()).sendRequest({})
```

### SpreeApi.currentOrder*

This method returns the current order in progress of the loggedIn user.

```
(SpreeApi.currentOrder()).sendRequest({})
```

### SpreeApi.emptyOrder*

This method removes all the line items from the current order.

```
(SpreeApi.emptyOrder()).sendRequest({params: {id: 1}})
```

### SpreeApi.deleteOrder*

This method deletes the current order.

```
(SpreeApi.deleteOrder()).sendRequest({params: {id: 1}})
```

*= Login Required
