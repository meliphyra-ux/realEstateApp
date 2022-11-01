import CartIcon from "../../assets/cart.png"
import PopularResidence from "./PopularResidence";
import { useSelector } from "react-redux";
import type { RootState } from '../../store/store';
import Cart from "../cart/Cart";

const Main = () => {
    const cart = useSelector((state: RootState) => state.cart.cartItems.length)
    return (
        <main>
            {/* <div className="relative bg-black">
                <img src={CartIcon} alt=""/>
                {cart !== 0 ? <p className="text-white absolute top-0 left-14">{cart}</p> : null}
            </div> */}
            <PopularResidence />
            {/* <Cart /> */}
        </main>
    );
};

export default Main;