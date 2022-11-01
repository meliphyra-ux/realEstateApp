import {FC, useState} from 'react'
import { Link } from 'react-router-dom'

const Header: FC = () => {
    const [pathname, setPathname] = useState(location.pathname)
  return (
    <header className="bg-black w-full flex flex-row items-center">
        {["Buying", "Renting", "Selling", "Renty", "Services", "Contact", "Cart"].map(route => (
            <Link 
            key={route}
            onClick={()=> setTimeout(() => setPathname(location.pathname), 0)}
            className={(pathname.includes(route.toLowerCase()) && route !== "Renty" ? "border-b-2 border-green-200 py-3 " : " ") + (route === "Renty" ? "w-1/3" : "w-1/6") + " text-center"} 
            to={route !== "Renty" ? route.toLowerCase() : "buying"}
            >{route}</Link>
        ))}
    </header>
  )
}

export default Header