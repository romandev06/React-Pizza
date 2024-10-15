import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

// 'https://66f020caf2a8bce81be515f6.mockapi.io/react-pizza?${paginationPage}'

export const fetchPizzasData = createAsyncThunk('pizzas/fetchPizzasByStatus', async (params, thunkAPI) => {
    const { page, category, sortCurrentTitle } = params
    const paginationPage = page ? `page=${page}&limit=3` : ''    // pagination
    const pizzaCategory = category ? `category=${category}` : ''    // category

    const sortPropertyName = sortCurrentTitle.sortPropertyName
    const order = sortPropertyName.startsWith('-') ? 'desc' : 'asc'
    const sortPizza = `sortBy=${sortPropertyName.replace('-', '')}&order=${order}`

    // filtering with debounce

    const { data } = await axios.get(`https://66f020caf2a8bce81be515f6.mockapi.io/react-pizza?${paginationPage}&${pizzaCategory}&${sortPizza}`)
    return data
})





const initialState = {
    status: 'loading',  // success and rejected
    pizzaItems: [],
}



const pizzaItemsSlice = createSlice({
    initialState,
    name: 'items',

    reducers: {},

    extraReducers(builder) {
        builder
        .addCase(fetchPizzasData.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPizzasData.fulfilled, (state, action) => {
            state.status = 'success'
            state.pizzaItems = action.payload
            if (state.pizzaItems.length === 0) {
                state.status = 'empty'
            }
        })
        .addCase(fetchPizzasData.rejected, (state, action) => {
            state.status = 'rejected'
            console.log('ошибка при получении пицц')
        })
    }
})


export const { } = pizzaItemsSlice.actions


export default pizzaItemsSlice.reducer // itemsReducer в store.js