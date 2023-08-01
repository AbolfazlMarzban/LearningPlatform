import Image from "next/image"
import { useEffect, useState } from "react"

export default function BookSlug({
    _id,
    name :existingName,
    description: existingDescription,
    address: existingAddress,
    price: existingPrice
} : any
){
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [ address, setAddress] = useState('')
    const [price, setPrice] = useState(0)
    useEffect(()=>{
        setName(existingName)
        setDescription(existingDescription)
        setAddress(existingAddress)
        setPrice(existingPrice)
    }, [_id])
    return(
        <div>
              <div className="bg-white flex flex-row p-3 rounded-xl w-9/12">
            <div className="basis-1/2">
                <h1 className="font-bold text-2xl">{name}</h1>
                <p>{description}</p>
            </div>
            <div className="basis-1/2">
                <Image src={address} width={0} height={0} alt=""      sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    className='rounded-xl'/>
            </div>
        </div>
        </div>
    )
}