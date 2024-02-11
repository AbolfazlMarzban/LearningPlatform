import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import CourseSlug from "@/components/courseSlug";

export async function getStaticPaths() {
    return {
        paths:[],
        fallback: true
    }
}

export async function getStaticProps({params}:any) {
    const {slug} = params
    const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
      method: "GET",
    });
    const data = await footer.json();
    console.log('footer', data)
    return {
      props: {
        footer: data[0],
      },
    };
  }

export default function Course({footer}:any){
    const router = useRouter()
    var name :any = router.query.name
    const [courseInfo, setCourseInfo] : any = useState({})
    // useEffect(()=>{
    //     if(name){
    //         axios.get('/api/courses?name=' + name[0]).then(response =>{
    //             console.log('course info', response.data)
    //             setCourseInfo(response.data)
    //         })
    //     }
    // }, [name?.length])
    return(
        // <Layout footer={footer}>
        //     {courseInfo && (
        //     <CourseSlug 
        //     {...courseInfo}/>
        //     )}
        // </Layout>
        <div>
            
        </div>
    )
}