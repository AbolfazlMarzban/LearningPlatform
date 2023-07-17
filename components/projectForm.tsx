import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios"


function ProjectForm({
  _id,
  name: existingName,
  link: existinglink,
  description: existingDescription,
  image: exisitingImage,
} : any
) {
const router = useRouter()
const [name, setName] = useState( existingName || '')
const [link, setlink] = useState( existinglink || '')
const [description, setDescription] = useState(existingDescription || '')
const [image, setImage] = useState(exisitingImage || [])
const [url,setUrl] = useState('')


async function submit(){
  const fileBody = new FormData()
  fileBody.append('image', image[0]) 
  const b = URL.createObjectURL(image[0])
  setUrl(b)
  console.log('url', url)
  try{
    const path = await fetch('/api/upload', {
      method: 'POST',
      body: fileBody,
      headers: {'Content-Type': 'multipart/form-data'}
    });
    console.log('path', path)
    const data = {name, link, description}
    let result;
    // if(_id){
    //    result = await axios.put("/api/projects", {...data, _id})
    // } else {
    //    result = await axios.post("/api/projects", {...data})
    // }
    if(result){
      console.log('proeject result', result)
    }
  } catch(error){
    console.log(error)
  }

}
  return (
      <div className="flex flex-col w-1/2">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
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
            <input id="dropzone-file" type="file" className="hidden" onChange={(ev) => setImage(ev.target.files)}/>
          </label>
        </div>
        {image.length ? 
          (<img src={url} />)  : ( 
            <span>select Image</span>
          )
      }
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
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
  );
}

export default ProjectForm;
