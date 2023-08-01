import Layout from "@/components/layout";
import BookSlug from "@/components/bookSlug";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Book(){
    const router = useRouter()
    const name = router.query.name
    const [bookInfo, setBookInfo] = useState(null)
    useEffect(()=>{
        axios.get('/projects/')
    }, [bookInfo])
    return(
        <Layout>
            <BookSlug />
        </Layout>
    )
}