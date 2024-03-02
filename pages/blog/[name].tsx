import Layout from "@/components/layout";
import React from "react";
import Head from "next/head";


export async function getStaticPaths() {
    const data = await fetch(`${process.env.BASE_URL}/api/posts`)
    const result = await data.json()
    let paths : any = []
    result.map((item:any)=>{
        let obj = {
            params: {name: item.title}
        }
        paths.push(obj)
    })
  return {
    paths: paths,
    fallback: false
  };
}
export async function getStaticProps({params}:any) {
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

function Post({ footer }: any) {
  return (
  <Layout footer={footer}>
      <Head>
        <title>Abolfazl Marzban - Blog</title>
        <meta name="description" content="Freelance Full Stack Web Developer" />
      </Head>

  </Layout>
  );
}

export default Post;
