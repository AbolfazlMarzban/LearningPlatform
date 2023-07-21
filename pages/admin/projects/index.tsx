import React from "react";
import AdminLayout from "@/components/adminLayout";
import Router from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import setImageUrl from "@/mixins/setImageUrl";
import Image from "next/image";
function index() {
const [projects, setProjects] = useState([])
 useEffect(()  => {
   axios.get("/api/projects").then((response) => {
    setProjects(response.data)
     })}, [])
  return (
    <AdminLayout>
      <div>
        <button className="rounded bg-sky-900 text-white p-2" onClick={() => Router.push('/admin/projects/newProject')}>
          New Project
        </button>
      </div>

      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Pic
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                link
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project:any)=>(
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project._id}>
   <th
     scope="row"
     className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
   >
              <Image src={project.address} alt="" width={100} height={100}/>
   </th>
   <td className="px-6 py-4">{project.name}</td>
   <td className="px-6 py-4">{project.link}</td>
 </tr>
            ))}
         
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default index;
