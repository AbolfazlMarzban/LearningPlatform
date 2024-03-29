'use client';
import React from 'react';
import Layout from '@/components/layout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Head from 'next/head';

export async function getStaticProps() {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  const pdata = await fetch(`${process.env.BASE_URL}/api/projects`, {
    method : "GET"
  })
  const projects = await pdata.json()
  return {
    props: {
      footer: data[0],
      projectss: projects
    },
  };
}

function Index({footer, projectss}:any) {
const [projects, setProjects] = useState(projectss)
return(
  <>
  <Head>
    <title>Abolfazl Marzban - Projects</title>
    <meta name="description" content="Freelance Full Stack Web Developer" />
  </Head>
{projects.length > 0 ?  (
    <Layout footer={footer}>
      <div className='h-screen flex gap-2 flex-wrap justify-center items-center mb-5'>
        {projects.map((project: any, i:any)=> 
             (
             <div className="max-w-md rounded-xl shadow-xl bg-gray-300 bg-opacity-50 p-1" key={i}>
            <a target='_blank' href={project.link}>
             <Image
                    src={project.address}
                    alt=""
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{width: '100%', height: 'auto'}}
                    className='rounded-xl'
                  />
         
            <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{project.name}</h5>
                <p className="mb-3 font-normal text-black dark:text-gray-400">{project.description}</p>
            </div>
            </a>
        </div>)
        )}
      </div>
    </Layout>
    )
      :
    (
        <Layout footer={footer}>
        <div role="status">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </Layout>
    )  
}
  </>
)


}

export default Index;