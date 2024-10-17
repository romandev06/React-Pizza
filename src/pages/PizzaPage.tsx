import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface iCurrentPizza {
    image: string,
    title: string,
    rating: number,
    price: number,
}

export default function PizzaPage() {
    const navigate = useNavigate()
    const { id } = useParams()

    const [currentPizza, setCurrentPizza] = useState<iCurrentPizza>({ image: '', title: '', rating: 0, price: 0 }) // значения по умолчанию

    const getCurrentPizza = async() => {
        const { data } = await axios.get(`https://66f020caf2a8bce81be515f6.mockapi.io/react-pizza/${id}`)
        setCurrentPizza(data)
    }

    useEffect(() => {
        getCurrentPizza()
    }, [])

    return (
        <section className='current-pizza__section'>
            <img src={currentPizza.image} alt="pizza image" />
            <div className='pizza-title-price'>
                <h2>{currentPizza.title}</h2>
                <p>{currentPizza.rating} (Рейтинг)</p>
            </div>
            <h3>{currentPizza.price} ₽</h3>
            <button onClick={() => navigate('/')}>Вернуться назад</button>
        </section>
    )
}
