import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slices/pizzaItemsSlice'    // fetch pizza
import filterReducer from './slices/filterSlice'    // pagination & category
import cartReducer from './slices/cartSlice'    // totalPrice, count, cartPizzaItems

export const store = configureStore({
    reducer: { itemsReducer, filterReducer, cartReducer },
})
