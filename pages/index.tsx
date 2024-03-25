import Link from "next/link";
import Layout from "../components/layout";
import me from "../public/me.jpeg";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

export async function getStaticProps() {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  const pdata = await fetch(`${process.env.BASE_URL}/api/projects`, {
    method: "GET",
  });
  const projects = await pdata.json();
  const blog = await fetch(`${process.env.BASE_URL}/api/posts`, {
    method: "GET",
  });
  const posts = await blog.json();
  return {
    props: {
      footer: data[0],
      projectz: projects.slice(-3),
      postz: posts.slice(-3)
    },
  };
}

export default function Home({ footer, projectz, postz }: any) {
  const [projects, setProjects] = useState(projectz);
  const [posts, setPosts] = useState(postz)
  return (
    <Layout footer={footer}>
      <Head>
        <title>Abolfazl Marzban - Freelance Full Stack Web Developer</title>
        <meta name="description" content="Freelance Full Stack Web Developer" />
      </Head>
      <div className="w-full flex flex-col justify-center items-center max-sm:px-3">
        <div className="bg-gray-300 rounded-lg p-3 bg-opacity-50 flex flex-col sm:flex-row gap-4 xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full items-center">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg">{`Hi! I'm Abolfazl Marzban.`}</h1>
            <h2 className="text-lg font-semibold">{`A full stack freelance developer`}</h2>
            <p className="p-2">
              {`
                Greetings! I'm Abolfazl, an experienced Freelance Full-Stack
                Developer, and I'm on a mission to craft digital experiences that
                go beyond expectations.
                `}
            </p>
            <div className="flex gap-3 mt-4">
              <div className="bg-red-600 text-white p-2 rounded-full px-3">
                <Link href={`tel:+989183933164`}>call me!</Link>
              </div>
              <div className="bg-red-600 text-white p-2 rounded-full px-3">
                <Link href={`mailto:abolfazlmarzban39@gmail.com`}>
                  mail me!
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 max-sm:hidden">
            <Image
              src={me}
              width={0}
              height={0}
              alt="abolfazl marzban"
              sizes="100vw"
              style={{ width: "auto", height: "100%" }}
              className="rounded-lg"
            ></Image>
          </div>
          <div className="sm:hidden w-3/4 profilePicbox h-72"></div>
        </div>
        <div className="my-2 bg-gray-300 rounded-lg p-3 bg-opacity-50 flex flex-col w-full items-center">
          <h2 className="text-lg font-bold mb-3">Last Projects</h2>
          <div className="flex gap-2 flex-wrap justify-center items-stretch mb-5">
            {projects.map((project: any, i: any) => (
              <div
                className="max-w-xs rounded-xl shadow-xl bg-gray-300 bg-opacity-50 p-1"
                key={i}
              >
                <a target="_blank" href={project.link}>
                  <Image
                    src={project.address}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl"
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-black dark:text-white">
                      {project.name}
                    </h5>
                    <p className="mb-3 font-normal text-black dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <h2 className="text-lg font-bold my-3">Last Posts</h2>
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
      </div>
    </Layout>
  );
}
