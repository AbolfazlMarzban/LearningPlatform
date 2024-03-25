import Layout from "@/components/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export async function getStaticProps() {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  const blog = await fetch(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
  });
  const posts = await blog.json();
  // console.log('posts', posts)
  return {
    props: {
      footer: data[0],
      posts: posts,
    },
  };
}

function Index({ footer, posts }: any) {
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
      <div className="w-full">
        {posts.length > 0 && (
          <div className="flex gap-2 flex-wrap justify-center items-center mb-5">
            {posts.map((post: any, i: any) => (
              <div
                className="max-w-xs rounded-xl shadow-xl bg-gray-300 bg-opacity-50 p-1"
                key={i}
              >
                <a target="_blank" href={`/blog/${post.title}`}>
                  <Image
                    src={post.postPic}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl"
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-black dark:text-white">
                      {post.title}
                    </h5>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      {post.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Index;
