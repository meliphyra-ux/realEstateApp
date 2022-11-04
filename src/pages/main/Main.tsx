import PopularResidence from "./PopularResidence";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

const Main = () => {
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
