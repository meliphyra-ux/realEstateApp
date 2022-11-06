import { FC } from "react";
import { useDispatch } from "react-redux";
import { CartItems, removeItem } from "../../store/slices/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/blur.css'

export interface CartItemProps {
  item: CartItems;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <figure className="flex mb-4 flex-row items-center justify-between p-4 border-4 rounded-lg border-white w-1/2">
      <LazyLoadImage effect="blur" placeholderSrc={item.imgSrc} width={300} src={item.imgSrc} alt="" />
      <p>{item.counter}</p>
      <div>
        <h2 className="font-bold border-b-2 border-white pb-3 mb-3 w-fit">
          Information:
        </h2>
        <ul className="list-disc">
          <li>Location📍: {item.location}</li>
          <li>Price💵: {item.price}$</li>
        </ul>
        <button
          className="mt-4 border-red-700 border-2 px-4 py-2 rounded-md  text-red-700 hover:text-white hover:bg-red-700 duration-150"
          onClick={() => {
            dispatch(removeItem(item));
          }}
        >
          Remove item
        </button>
      </div>
    </figure>
  );
};

export default CartItem;
