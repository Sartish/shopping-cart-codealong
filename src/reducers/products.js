import { createSlice } from '@reduxjs/toolkit'

const productData = [
    { id: 1, title: 'socks', price: 100, emoji: '🧦'},
    { id: 2, title: 'socks', price: 200, emoji: '👕'},
    { id: 3, title: 'socks', price: 350, emoji: '👖'},
    { id: 4, title: 'socks', price: 550, emoji: '👗'}
]

export const products = createSlice({
    name: 'products',
    initialState: productData
})

