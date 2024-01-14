import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ProjectForm({
  _id,
  name :existingName,
  link: existinglink,
  description: existingDescription,
  address: existingAddress,
}: any) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [link, setlink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [url, setUrl] = useState("");

  function getImage(ev: any) {
    const f = ev.target.files;
    setImage(f);
    const txt = URL.createObjectURL(ev.target.files[0]);
    console.log("txt", txt);
    setUrl(txt);
  }
  async function submit() {
    try {
      let data = {}
      let address;
      if(image.length){
        const fileBody = new FormData();
      fileBody.append("image", image[0]);
      const path = await axios.post("/api/upload",fileBody, {headers: {'Content-Type': 'undefined'}});
       address = path.data
       data = { name, link, description, address };
      } else {
        data = {name, link, description, url}
      }
      let result;
      if(_id){
         result = await axios.put(`/api/projects?id=${_id}`, {...data})
      } else {
         result = await axios.post("/api/projects", {...data})
      }
      if (result) {
        console.log("proeject result", result);
        router.push('/admin/projects')
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    setName(existingName)
    setUrl(existingAddress)
    setDescription(existingDescription)
    setlink(existinglink)
  }, [_id])
  return (
    <div className="flex flex-col w-1/2">
      <div className="flex items-center justify-center w-full">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          {url?.length > 0 ? (
            <img src={url} style={{ height: "inherit" }} />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          )}

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(ev) => getImage(ev)}
          />
        </label>
      </div>
      <div className="flex flex-col items-center justify-center w-full p-4 gap-2">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Project name
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project name"
          required
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Project link
        </label>
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project link"
          required
          value={link}
          onChange={(ev) => setlink(ev.target.value)}
        />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Project description
        </label>
        <textarea
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Project name"
          required
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={submit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProjectForm;
