import React from 'react'
import HeaderSearch from './HeaderSearch'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(): React.ReactElement {
    //@ts-ignore
    const { totalPrice, cartItems } = useSelector(state => state.cartReducer)
    const totalCount = cartItems.reduce((prev, current) => prev + current.count, 0)
    const { pathname } = useLocation()

    return (
        <header>
            <section className='container header-container'>
                <Link to={'/'}>
                    <section className='header-logo'>
                        <img src="/appImages/logo.svg" alt="icon" />
                        <div>
                            <h3>React Pizza</h3>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </section>
                </Link>
                <section>
                    {pathname !== '/cart' && pathname !== '/cart-empty' && (
                        <HeaderSearch/>
                    )}
                </section>
                {pathname !== '/cart-empty' && (
                    <Link to={'/cart'}>
                    <section className='cart-button'>
                        <p>{totalPrice} ₽</p>
                        <div className='cart-count'>
                            <img src="/appImages/cart.svg" alt="icon" />
                            <p>{totalCount}</p>
                        </div>
                    </section>
                </Link>
                )}
            </section>
        </header>
    )
}
