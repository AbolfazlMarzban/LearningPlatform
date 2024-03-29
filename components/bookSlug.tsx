
import Image from "next/image";
import { useEffect, useState } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { addToCart } from "@/context/slice";

export default function BookSlug({
  _id,
  name: existingName,
  description: existingDescription,
  address: existingAddress,
  price: existingPrice,
}: any) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    setName(existingName);
    setDescription(existingDescription);
    setAddress(existingAddress);
    setPrice(existingPrice);
  }, [_id]);
  if(_id){
    return (
      <div className="flex flex-row justify-center">
        <div className="bg-gray-300 bg-opacity-50 p-1 flex flex-row p-4 rounded-xl w-9/12 shadow-xl items-center">
          <div className="basis-1/2 p-2">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p>{description}</p>
          </div>
          <div className="basis-1/2 p-2">
            <Image
              src={address}
              width={0}
              height={0}
              alt=""
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-xl"
            />
            <div className="bg-gray-300 my-2 p-3 rounded-xl text-black flex flex-row justify-between items-center">
              <span className="font-bold">{price} $</span>
              <button className="border rounded-xl p-2 flex flex-row hover:bg-white" onClick={()=>dispatch(addToCart({_id, name, description, address, price}))}>
                Add To Cart
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </button>
            </div>
            <div className="bg-gray-300 text-black my-2 text-center  p-3 rounded-xl border hover:bg-white">
              <a href="#" className="block w-full h-full">Read the demo</a>
            </div>
          </div>
        </div>
      </div>
    );
  } else{
    return(
      
<div role="status">
    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span className="sr-only">Loading...</span>
</div>

    )
  }
 
}
