import Layout from "@/components/layout";
import BookSlug from "@/components/bookSlug";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Course(){
    const router = useRouter()
    var name :any = router.query.name
    const [courseInfo, setCourseInfo] : any = useState({})
    useEffect(()=>{
        if(name){
            axios.get('/api/courses?name=' + name[0]).then(response =>{
                console.log('course info', response.data)
                setCourseInfo(response.data)
            })
        }
    }, [name?.length])
    return(
        <Layout>
            {courseInfo && (
            <BookSlug 
            {...courseInfo}/>
            )}
        </Layout>
    )
}