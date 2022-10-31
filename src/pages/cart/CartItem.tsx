import {FC, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../store/slices/cartSlice'
import { CardProps } from '../../components/Card'

export interface CartItemProps{
    item: CardProps
}

const CartItem: FC<CartItemProps>  = ({item}) => {
    const dispatch = useDispatch()
  return (
    <div>
        <img src={item.imgSrc} alt=""/>
        <button
        className='text-black'
        onClick={() => {
            dispatch(removeItem(item))
        }}
        >Remove item</button>
    </div>
  )
}

export default CartItem