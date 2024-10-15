import React, { useState } from 'react'
import { setCategory } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

export default function Categories({ category }) {
    const dispatch = useDispatch()

    const handleClick = (i) => {
        dispatch(setCategory(i))
    }

    const categories = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <section className='categories-container'>
            {categories.map((item, i) =>
            <button key={i} onClick={() => handleClick(i)} className={category === i ? 'active-category' : ''}>
                {item}
            </button>)}
        </section>
    )
}
