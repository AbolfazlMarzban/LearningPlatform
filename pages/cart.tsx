import Layout from "@/components/layout"
import Image from "next/image"
import { cartState } from "@/context/store"
import {useRecoilState} from 'recoil'

export default function Cart(){
    const [cartItems, setCartItems] = useRecoilState(cartState)
    console.log('cartItems', cartItems)
    return(
        <Layout>
            {cartItems.length <= 0 ? <h1 className="text-center">Your Cart is Empty!</h1>
            : cartItems.map((item :any)=>
                <div  className="flex flex-col my-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.existingAddress} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.existingName}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.existingPrice} $</p>
                    </div>
                </div>

            ) }
        </Layout>
    )
}