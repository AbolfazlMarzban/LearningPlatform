import Layout from "@/components/layout";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

export async function getStaticPaths() {
  const data = await fetch(`${process.env.BASE_URL}/api/posts`);
  const result = await data.json();
  let paths: any = [];
  result.map((item: any) => {
    let obj = {
      params: { name: item.title },
    };
    paths.push(obj);
  });
  return {
    paths: paths,
    fallback: false,
  };
}  
export async function getStaticProps({ params }: any) {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  console.log(process.env.BASE_URL)
  const post = await axios.get(`${process.env.BASE_URL}/api/posts?name=${params["name"]}`)
  // console.log("post", post.data);
    return {
      props: {
        footer: data[0],
        post: post.data,
      },
    };
}

function Post({ footer, post }: any) {
  return (
    <Layout footer={footer}>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="w-full flex flex-col items-center bg-gray-300 bg-opacity-50 p-4">
        <Image
          src={post.postPic}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "50%", height: "auto" }}
          className="rounded-xl"
        />
        <h1 className="font-bold text-xl my-3">{post.title}</h1>
        <div className="h-full px-4" dangerouslySetInnerHTML={{__html: post.text}}>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
