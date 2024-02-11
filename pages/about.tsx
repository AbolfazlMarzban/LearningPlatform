import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import axios from "axios";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

export async function getStaticProps() {
  const footer = await fetch(`${process.env.BASE_URL}/api/contactsManage`, {
    method: "GET",
  });
  const data = await footer.json();
  const aboutdata = await fetch(`${process.env.BASE_URL}/api/aboutManage`, {
    method: 'GET'
  })
  const about = await aboutdata.json()
  return {
    props: {
      footer: data[0],
      about: about[0].text
    },
  };
}

function About({footer, about}:any) {
  // const [about, setAbout] = useState("");
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios.get("/api/aboutManage");
  //     if (result.data) {
  //       setAbout(result.data[0].text);
  //     }
  //   })();
  // }, []);
  return (
    <Layout footer={footer}>
      <div
        className="flex justify-center items-center bg-gray-300 bg-opacity-50 p-3 m-3 rounded-lg"      >
        <div className="h-full" dangerouslySetInnerHTML={{__html: about}}>
        </div>
      </div>
    </Layout>
  );
}

export default About;
