import {FC} from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import type { RootState } from '../store/store';
import logo from "../assets/logo.svg"

const Header: FC = () => {
    const { pathname } = useLocation()
    const cartCounter = useSelector((state : RootState) => state.cart.cartItems.length)
  return (
    <header className="w-full flex justify-center fixed">
      <nav className="w-full max-w-6xl flex flex-row items-center justify-between">
      {["Buying", "Renting", "Selling", "Renty", "Services", "Contact", "Cart"].map(route => (
            <Link 
            key={route}
            className={(pathname.includes(route.toLowerCase()) && route !== "Renty" ? "border-b-2 border-green-200" : " ") + (route === "Renty" ? "w-1/3 text-2xl font-bold flex justify-center" : " ") + " text-center relative py-3 "} 
            to={route !== "Renty" ? route.toLowerCase() : "buying"}
            >{route === "Renty" && <img className="inline-block mr-1" src={logo} alt="logo"/>}{route}{route === "Cart" && cartCounter > 0 && <p className="rounded-full bg-white absolute right-[-18px] top-1 text-black w-4 h-4 text-[11px] align-middle">{cartCounter}</p>}</Link>
        ))}
      </nav>
    </header>
  )
}

export default Header