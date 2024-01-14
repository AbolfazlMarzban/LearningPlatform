import React, { useState, useEffect } from "react";
import Layout from "@/components/layout";
import axios from "axios";

function About() {
  const [about, setAbout] = useState('')
  useEffect(()=>{
    (async()=>{
        const result = await axios.get('/api/aboutManage')
        if(result.data){
            setAbout(result.data[0].text)
        }
    })()
}, [])
  return (
    <Layout>
      <div className="flex justify-center items-center bg-gray-300 bg-opacity-50 p-3 m-3 rounded-lg">
        {/* <p className="p-4"> */}
        {/* </p> */}
        {/* {()=>{
          return(
            <>
            
            </>
          )
        }} */}
      </div>
    </Layout> 
  );
}

export default About;
