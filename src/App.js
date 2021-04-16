import React from 'react'
import { Provider } from 'react-redux'
import { Products } from 'components/Products'
import { Cart } from 'components/Cart'
import { configureStore, combineReducers } from '@reduxjs/toolkit'

import { cart } from 'reducers/cart'
import { products } from 'reducers/products'

const reducer = combineReducers ({
  cart: cart.reducer,
  products: products.reducer
})

const store = configureStore({ reducer: reducer})
export const App = () => (
  <Provider store={store}>
    <Cart />
    <Products />
  </Provider>
)
