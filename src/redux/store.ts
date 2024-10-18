import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './slices/pizzaItemsSlice'    // fetch pizza
import filterReducer from './slices/filterSlice'    // pagination & category
import cartReducer from './slices/cartSlice'    // totalPrice, count, cartPizzaItems

export const store = configureStore({
    reducer: { itemsReducer, filterReducer, cartReducer },
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch