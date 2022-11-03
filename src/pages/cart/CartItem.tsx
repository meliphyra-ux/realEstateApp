import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";
import { CardProps } from "../../components/Card";

export interface CartItemProps {
  item: CardProps;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <figure className="flex m-4 flex-row items-center justify-between p-4 border-4 rounded-lg w-[80vw] border-white">
      <img width={300} src={item.imgSrc} alt="" />
      <div>
        <p>{item.location}</p>
        <p>{item.price}</p>
        <button
        className="border-green-700 border-2 px-8 py-4 rounded-md  text-green-700 hover:text-white hover:bg-green-700 duration-150"
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
