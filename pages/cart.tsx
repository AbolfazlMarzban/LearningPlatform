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
                <div className="flex flex-row my-3 items-center bg-transparent  rounded-xl shadow-2xl max-w-5xl">
                    <div className="basis-1/3">
                    <Image width={0} height={0}             sizes="100vw"
 className="object-cover rounded-l-lg  " src={item.existingAddress}
 style={{ width: "100%", height: "100%" }}

 alt="" />
                    </div>
                    <div className="basis-1/3 flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{item.existingName}</h5>
                        <p className="mb-3 font-normal text-black dark:text-gray-400">{item.existingPrice} $</p>
                    </div>
                    <div className="basis-1/3"></div>
                </div>

            ) }
        </Layout>
    )
}