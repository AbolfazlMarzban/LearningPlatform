import Image from "next/image";
import { useEffect, useState } from "react";

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
  useEffect(() => {
    setName(existingName);
    setDescription(existingDescription);
    setAddress(existingAddress);
    setPrice(existingPrice);
  }, [_id]);
  return (
    <div className="flex flex-row justify-center">
      <div className="bg-transparent flex flex-row p-4 rounded-xl w-9/12 shadow-xl">
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
            <button className="border rounded-xl p-2 flex flex-row hover:bg-white">
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
            <a href="#" className="w-full h-full">Read the demo</a>
          </div>
        </div>
      </div>
    </div>
  );
}
