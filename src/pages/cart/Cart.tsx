import {FC} from 'react'
import { useSelector } from 'react-redux'
import BackgroundWrapper from '../../components/backgroundWrapper';
import type { RootState } from '../../store/store';
import CartItem from './CartItem';
import bg from "../../assets/bg.svg"

const Cart:FC = () => {
    const cart = useSelector((state:RootState) => state.cart.cartItems)
  return (
    <section>
        <>
            {cart && cart.map(item => (
                <CartItem key={item.area+item.price+item.yearOfBuilding} item={item} />
            ))}
        </>
    </section>
  )
}

export default BackgroundWrapper(Cart, bg)