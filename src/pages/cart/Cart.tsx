import {FC, useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import BackgroundWrapper from '../../components/backgroundWrapper';
import type { RootState } from '../../store/store';
import CartItem from './CartItem';
import bg from "../../assets/bg.svg"

const Cart:FC = () => {
    const cart = useSelector((state:RootState) => state.cart.cartItems)
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
  return (
    <section className="w-full flex flex-col items-start max-w-6xl">
        <>
            {cart && cart.map(item => (
                <CartItem key={item.area+item.price+item.yearOfBuilding} item={item} />
            ))}
        </>
        {totalPrice !== 0 ? <p>Total price: {totalPrice}</p> : <p>There is no items in cart</p>}
    </section>
  )
}

export default BackgroundWrapper(Cart, bg)