import Layout from "@/components/layout";
import BookSlug from "@/components/bookSlug";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export async function getStaticPaths() {
  const data = await fetch(`${process.env.BASE_URL}/api/books`);
  const result = await data.json();
  let paths: any = [];
  result.map((item: any) => {
    let obj = {
      params: { name: item.name },
    };
    paths.push(obj);
  });
  return {
    paths: paths,
    fallback: false,
  };
}  
export async function getStaticProps({params}: any) {
    const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
      method: "GET",
    });
    const data = await footer.json();
    const book = await axios.get(`${process.env.BASE_URL}/api/books?name=${params["name"]}`)

    return {
      props: {
        footer: data[0],
        book: book.data
      },
    };
  }

export default function Book({footer, book}:any){
    // const router = useRouter()
    // var name :any = router.query.name
    const [bookInfo, setBookInfo] : any = useState(book)

    return(
        <Layout footer={footer}>
             {bookInfo && (
           <BookSlug 
            {...bookInfo}/>
            )}
        </Layout>
    )
}