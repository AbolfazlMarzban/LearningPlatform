import AdminLayout from '@/components/adminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
    const [about, setAbout] = useState('')
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
                <textarea  cols={30} rows={10} className='border rounded-lg outline-0 p-2' value={about} onChange={(ev)=>setAbout(ev.target.value)}></textarea>
                <button className='p-2 rounded-lg mt-2 text-white bg-green-400' onClick={()=>saveAbout()}> 
                    save
                </button>
            </div>
            <ToastContainer />
        </AdminLayout>
    );
}

export default Index;