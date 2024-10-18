import { createSlice, PayloadAction } from "@reduxjs/toolkit"


export type CartItem = {
    id: string,
    image: string,
    title: string,
    price: number,
    size: string,
    type: string,
    count: number,
}

interface IInitialCartState {
    totalPrice: number,
    cartItems: CartItem[],
}

// обычно для initialState юзают interface
// inteface только для обьектов, в отличие от type
const initialState: IInitialCartState = {
    totalPrice: 0,
    cartItems: [],
}


const cartSlice = createSlice({
    initialState,
    name: 'cart',

    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find(item => item.id === action.payload.id)
            if (currentObject) {
                currentObject.count++
            } else {
                state.cartItems.push({ ...action.payload, count: 1 })
            }
            state.totalPrice = state.cartItems.reduce((prev, current) => prev + (current.price * current.count), 0)
        },
        minusItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find(item => item.id === action.payload.id)
            if (currentObject) {
                currentObject.count--
                if (currentObject.count === 0) {
                    state.cartItems = state.cartItems.filter(item => item !== currentObject)
                }
                state.totalPrice = state.cartItems.reduce((prev, current) => prev + (current.price) * current.count, 0)
            }
        },
        deleteAllItems(state) {
            if (window.confirm('Вы точно хотите очистить вашу корзину?')) {
                state.cartItems = []
                state.totalPrice = 0
            }
        },
        deleteCurrentItem(state, action: PayloadAction<CartItem>) {
            const currentObject = state.cartItems.find(item => item.id === action.payload.id)
            if (window.confirm('Вы точно хотите удалить данную пиицу ?(')) {
                if (currentObject) {
                    state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                    state.totalPrice = state.cartItems.reduce((prev, current) => prev + (current.price * current.count), 0)
                }
            }
        }
    }
})

export const { addItem, minusItem, deleteAllItems, deleteCurrentItem } = cartSlice.actions

export default cartSlice.reducer // cartReducer в store.js