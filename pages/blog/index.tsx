import Layout from "@/components/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Head from "next/head";

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

function Index({ footer }: any) {
  // const [posts, setPosts] = useState([])
  // useEffect(()=>{
  //     (async()=>{
  //         const result = await axios.get('/api/posts')
  //         setPosts(result.data)
  //     })()
  // }, [])
  return (
    <Layout footer={footer}>
      <Head>
        <title>Abolfazl Marzban - Blog</title>
        <meta name="description" content="Freelance Full Stack Web Developer" />
      </Head>
      <div></div>
    </Layout>
  );
}

export default Index;
