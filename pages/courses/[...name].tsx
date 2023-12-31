'use client';

import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseSlug from "@/components/courseSlug";

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
            <CourseSlug 
            {...courseInfo}/>
            )}
        </Layout>
    )
}