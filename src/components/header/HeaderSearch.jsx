import React from 'react'
import { setInputValue } from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function HeaderSearch() {
    const dispatch = useDispatch()
    const { inputValue } = useSelector(state => state.filterReducer)

    return (
        <label className='input-wrapper'>
            <input placeholder='Введите название пиццы...' className='header-input' onChange={(e) => dispatch(setInputValue(e.target.value))} value={inputValue} type="text" />
            {inputValue && (
                <svg onClick={() => dispatch(setInputValue(''))} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-icon"><path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            )}
        </label>
    )
}
