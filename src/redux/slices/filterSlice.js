import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    category: 0,
    page: 1,
    inputValue: '',
}



const filterSlice = createSlice({
    initialState,
    name: 'items',

    reducers: {
        setPage(state, action) {
            state.page = action.payload
        },
        setCategory(state, action) {
            state.category = action.payload
        },
        setSaveQuery(state, action) {
            state.category = Number(action.payload.category)
            state.page = Number(action.payload.page)
        },
        setInputValue(state, action) {
            state.inputValue = action.payload
        }
    },
})


export const { setPage, setCategory, setSaveQuery, setInputValue } = filterSlice.actions


export default filterSlice.reducer // filterReducer в store.js