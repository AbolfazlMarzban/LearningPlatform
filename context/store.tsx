'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
    firstName: string
}

interface ContextProps {
    userId: string,
    setUserId: Dispatch<SetStateAction<string>>,
    data: DataType[],
    setData: Dispatch<SetStateAction<DataType[]>>
}

const GlobalContext = createContext<ContextProps>({
    userId: '',
    setUserId: (): string => '',
    data: [],
    setData: (): DataType[] => []
})


export const GlobalContextProvider = ({children}: any) => {
    const [userId, setUserId] = useState('')
    const [data, setData] = useState<[] | DataType[]>([])

}