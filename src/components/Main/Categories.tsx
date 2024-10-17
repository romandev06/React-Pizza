import React from 'react'
import { setCategory } from '../../redux/slices/filterSlice'
import { useDispatch } from 'react-redux'

type CategoriesType = {
    category: number,
}

export default function Categories({ category }: CategoriesType): React.ReactElement {
    const dispatch = useDispatch()

    const handleClick = (i: number): void => {
        dispatch(setCategory(i))
    }

    const categories: string[] = [
        'Все',
        'Мясные',
        'Вегетарианская',
        'Гриль',
        'Острые',
        'Закрытые',
    ]

    return (
        <section className='categories-container'>
            {categories.map((item: string, i: number) =>
            <button key={i} onClick={() => handleClick(i)} className={category === i ? 'active-category' : ''}>
                {item}
            </button>)}
        </section>
    )
}
