import Layout from "@/components/layout";
import Image from "next/image";
import { cartState } from "@/context/store";
import { useRecoilState } from "recoil";

export default function Cart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  function removeFromCart(id: any) {
    const index = cartItems.findIndex((item: any) => item._id == id);
    if(index > -1){
      const newList :any = removeItemAtIndex(cartItems, index);
      setCartItems(newList)
    }
  }
  function removeItemAtIndex(arr:any, index:any){
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  const totalPrice: any = () => {
    let total = 0;
    if (cartItems.length > 0) {
      cartItems.forEach((item: any) => (total += item.existingPrice));
      return total;
    }
  };
  return (
    <Layout>
      {cartItems.length <= 0 ? (
        <h1 className="text-center">Your Cart is Empty!</h1>
      ) : (
        cartItems.map((item: any) => (
          <div
            key={item._id}
            className="flex flex-row my-3 items-center bg-transparent  rounded-xl shadow-2xl max-w-5xl h-32"
          >
            <div className="basis-1/3 h-full">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                className="object-cover rounded-l-lg  "
                src={item.existingAddress}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="basis-3/6 flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">
                {item.existingName}
              </h5>
              <p className="mb-3 font-normal text-white dark:text-gray-400">
                {item.existingPrice} $
              </p>
            </div>
            <div className="basis-1/6">
              <button
                className="border rounded-xl p-2 text-white flex flex-row hover:bg-white hover:text-black"
                onClick={() => removeFromCart(item._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button
          className="border rounded-xl p-2 w-full text-white flex flex-row justify-between hover:bg-white hover:text-black"
          onClick={removeFromCart}
        >
          Checkout
          <div>Total: {totalPrice()}$</div>
        </button>
      )}
    </Layout>
  );
}
