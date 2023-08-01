import Layout from "@/components/layout";
import BookSlug from "@/components/bookSlug";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Book(){
    const router = useRouter()
    var name :any = router.query.name
    const [bookInfo, setBookInfo] : any = useState({})
    useEffect(()=>{
        if(name){
            axios.get('/api/books?name=' + name[0]).then(response =>{
                console.log('book info', response.data)
                setBookInfo(response.data)
            })
        }
    }, [bookInfo._id])
    useEffect(()=>{
        axios.get('/projects/')
    }, [bookInfo])
    return(
        <Layout>
            {bookInfo && (
            <BookSlug 
            {...bookInfo}/>
            )}
        </Layout>
    )
}