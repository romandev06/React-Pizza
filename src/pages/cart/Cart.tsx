import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addItem, deleteAllItems, deleteCurrentItem, minusItem } from '../../redux/slices/cartSlice'


export interface ICartItem {
    id: string,
    image: string,
    title: string,
    price: number,
    category: number,
    size: number,
    type: number,
    count: number
}


export default function Cart(): React.ReactElement {
    const dispatch = useDispatch()
    //@ts-ignore
    const { totalPrice, cartItems } = useSelector(state => state.cartReducer)
    const navigate = useNavigate()

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/cart-empty')
        }
    }, [cartItems.length])

    return (
        <section className='cart-section cart-container'>
            <section className='cart-text__wrapper'>
                <div className='cart-text'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cart-icon"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                    <h3>Корзина</h3>
                </div>
                {cartItems.length > 0 && (
                    <button onClick={() => dispatch(deleteAllItems())} className='clear-cart__btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bin-icon"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>
                        <p>Очистить корзину</p>
                    </button>
                )}
            </section>

            <section className='pizza-cart__section'>
                {cartItems.map((item: ICartItem, i: number) => 
                    <div key={i} className='pizza-cart__values'>
                        <div className='pizza-cart__properties'>
                            <img width={80} height={80} src={item.image} alt="pizza image" />
                            <div className='pizza-data'>
                                <h4>{item.title}</h4>
                                <p>{item.type} тесто, {item.size} см.</p>
                            </div>
                        </div>
                        <div className='pizza-cart__count'>
                            <img onClick={() => dispatch(minusItem(item))} src="/appImages/minus-count-btn.svg" alt="minus" />
                            <p>{item.count}</p>
                            <img onClick={() => dispatch(addItem(item))} src="/appImages/plus-count-btn.svg" alt="plus" />
                        </div>
                        <p className='pizza-cart__price'>{item.price * item.count} ₽</p>
                        <button className='pizza-cart__delete-btn'>
                            <img onClick={() => dispatch(deleteCurrentItem(item))} src="/appImages/delete-cart-item.svg" alt="delete current item" />
                        </button>
                    </div>
                )}
            </section>

            <section className='cart-text__wrapper go-back__wrapper'>
                <Link to={'/'}>
                    <button className='go-back__text'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="go-back__icon"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
                        <p>Вернуться назад</p>
                    </button>
                </Link>
                <button className='cart-pay__btn'>
                    <p>Оплатить сейчас</p>
                </button>
            </section>
        </section>
    )
}
