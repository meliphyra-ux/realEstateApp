import {FC} from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store';
import CartItem from './CartItem';

const Cart:FC = () => {
    const cart = useSelector((state:RootState) => state.cart.cartItems)
  return (
    <div>
        <>
            {cart && cart.map(item => (
                <CartItem key={item.area+item.price+item.yearOfBuilding} item={item} />
            ))}
        </>
    </div>
  )
}

export default Cart