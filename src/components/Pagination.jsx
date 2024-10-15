import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../redux/slices/filterSlice'

export default function Pagination({ page }) {
    const dispatch = useDispatch()

    return (
        <section className='container pagination-container'>
            <button onClick={() => dispatch(setPage(0))} className={page === 0 ? `pagination-button__active` : 'pagination-button'}>Все</button>
            {Array.from({length: 7}).map((_, i) =>
            <button key={i} onClick={() => dispatch(setPage(i + 1))} className={i + 1 === page ? `pagination-button__active` : 'pagination-button'}>
                {i + 1}
            </button>
        )}
        </section>
    )
}
