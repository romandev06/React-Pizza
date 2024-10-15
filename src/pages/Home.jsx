import React, { useEffect, useState } from 'react'
import Categories from '../components/Main/Categories'
import Sort from '../components/Main/Sort'

import { PizzaSkeleton } from '../components/Main/PizzaSkeleton'
import PizzaBlock from '../components/Main/PizzaBlock'

import { useDispatch, useSelector } from 'react-redux';
import { fetchPizzasData } from '../redux/slices/pizzaItemsSlice'
import FailureView from '../components/Main/pizzasStatus/FailureView'
import EmptyPizzaItems from '../components/Main/pizzasStatus/EmptyPizzaItems'
import Pagination from '../components/Pagination'

import qs from 'qs'
import { useNavigate } from 'react-router-dom'
import { setSaveQuery } from '../redux/slices/filterSlice'


export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { pizzaItems, status } = useSelector(state => state.itemsReducer)
    const { category, page } = useSelector(state => state.filterReducer)
    const { inputValue } = useSelector(state => state.filterReducer)

    const [sortCurrentTitle, setCurrentSortTitle] = useState({ sortName: 'Популярности (по возрастанию)', sortPropertyName: 'rating', })




    const fetchPizzas = () => {
        dispatch(fetchPizzasData({ page, category, sortCurrentTitle }))
    }

    useEffect(() => {
        fetchPizzas()
    }, [page, category, sortCurrentTitle])



    /* 


// вшитие параметров в url (работа с категориями и пагинацией)
    useEffect(() => {
        if (window.location.search) {
            const parseString = qs.parse(window.location.search.substring(1))
            dispatch(setSaveQuery({...parseString}))
        }
    }, [])

    useEffect(() => {
        const qsString = qs.stringify({ category, page })
        navigate(`?${qsString}`) // за счет useNavigate() мы делаем редирект на определенный адрес
    }, [category, page])


*/



    return (
        <section className='home'>
            <section className='container category-sort'>
                <Categories category={category} />
                <Sort sortCurrentTitle={sortCurrentTitle} setCurrentSortTitle={setCurrentSortTitle} />
            </section>
            {status === 'loading' && (
                <section className='container pizza-wrapper'>
                    {Array.from({ length: pizzaItems.length || 3 }).map((_, i) => <PizzaSkeleton key={i} />)}
                </section>
            )}
            {status === 'success' && (
                <section className='container pizza-wrapper'>
                    {pizzaItems.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
                    .map(item => <PizzaBlock key={item.id} {...item} />)}
                </section>
            )}
            {status === 'empty' && (
                <section>
                    <EmptyPizzaItems/>
                </section>
            )}
            {status === 'rejected' && <FailureView/>}
            <Pagination page={page} />
        </section>
    )
}
