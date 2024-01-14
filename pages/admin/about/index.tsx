import AdminLayout from '@/components/adminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });

function Index() {
    const [about, setAbout] = useState('')

    const quillModules = {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          [{ align: [] }],
          [{ color: [] }],
          ['code-block'],
          ['clean'],
        ],
      };

      const quillFormats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'align',
        'color',
        'code-block',
      ];
    
    
      const handleEditorChange = (newContent:any) => {
        setAbout(newContent);
      };
    
    useEffect(()=>{
        (async()=>{
            const result = await axios.get('/api/aboutManage')
            if(result.data){
                setAbout(result.data[0].text)
            }
        })()
    }, [])
    async function saveAbout() {
        try{
            const result = await axios.post('/api/aboutManage', {'about': about})
            if(result.data){
                toast('text is saved')
            }
        } catch(error){
            console.log(error)
        }
    }
    return (
        <AdminLayout>
            <div className='flex flex-col'>
                {/* <textarea  cols={30} rows={10} className='border rounded-lg outline-0 p-2' value={about} onChange={(ev)=>setAbout(ev.target.value)}></textarea> */}
                <div className="h-full w-[90vw]">
          <QuillEditor
            value={about}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
        </div>
                <button className='p-2 rounded-lg mt-2 text-white bg-green-400' onClick={()=>saveAbout()}> 
                    save
                </button>
            </div>
            <ToastContainer />
        </AdminLayout>
    );
}

export default Index;