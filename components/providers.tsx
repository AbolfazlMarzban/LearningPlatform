import { createContext, useState } from "react";


export default function providers({children} : any){
    const Cart = createContext([])
    const[cartItems, setCartItems] = useState([])
return(
    <Cart.Provider value={cartItems}>
    </Cart.Provider>
)
}