import React from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../redux/slices/filterSlice'

type PaginationType = {
    page: number,
}

export default function Pagination({ page }: PaginationType): React.ReactElement {
    const dispatch = useDispatch()

    const handleClick = (i: number): void => {
        dispatch(setPage(i + 1))
    }

    return (
        <section className='container pagination-container'>
            <button onClick={() => dispatch(setPage(0))} className={page === 0 ? `pagination-button__active` : 'pagination-button'}>Все</button>
            {Array.from({length: 7}).map((_: unknown, i: number) =>
            <button key={i} onClick={() => handleClick(i)} className={i + 1 === page ? `pagination-button__active` : 'pagination-button'}>
                {i + 1}
            </button>
        )}
        </section>
    )
}
