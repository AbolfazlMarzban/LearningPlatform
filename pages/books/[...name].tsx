import Layout from "@/components/layout";
import BookSlug from "@/components/bookSlug";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getStaticPaths() {
    return {
        paths:[],
        fallback: true
    }
}

export async function getStaticProps() {
    const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
      method: "GET",
    });
    const data = await footer.json();
    return {
      props: {
        footer: data[0],
      },
    };
  }

export default function Book({footer}:any){
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
    }, [name?.length])
    return(
        // <Layout footer={footer}>
        //     {bookInfo && (
        //     <BookSlug 
        //     {...bookInfo}/>
        //     )}
        // </Layout>
        <div>

        </div>
    )
}