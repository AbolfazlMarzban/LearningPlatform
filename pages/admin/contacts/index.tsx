import AdminLayout from '@/components/adminLayout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Index() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [github, setGithub] = useState('')
    const [instagram, setInstagram] = useState('')
    useEffect(()=>{
        (async()=>{
            const result = await axios.get('/api/contactsManage')
            console.log('res', result)
            setPhoneNumber(result.data[0].phonenumber)
            setEmail(result.data[0].email)
            setLinkedin(result.data[0].linkedin)
            setGithub(result.data[0].github)
            setInstagram(result.data[0].instagram)
        })()
    }, [])
    async function saveContacts() {
        try{
            let data = {
                'phonenumber': phoneNumber,
                'email': email,
                'linkedin': linkedin,
                'github': github,
                'instagram': instagram
            }
            const result = await axios.post('/api/contactsManage', {'data': data})
            if(result.data){
                toast('contacts were saved succesfully')
            } else {
                toast('operation failed try again')
            }
        } catch(error){
            console.log(error)
        }
    }
    return (
        <AdminLayout>
            <div className='w-full flex flex-col gap-3'>
                <label htmlFor="">phone Number:</label>
                <input type="text"  className='border rounded-lg p-2' value={phoneNumber} onChange={(ev)=>setPhoneNumber(ev.target.value)}/>
                <label htmlFor="">email:</label>
                <input type="text"  className='border rounded-lg p-2' value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
                <label htmlFor="">linkedin:</label>
                <input type="text"  className='border rounded-lg p-2' value={linkedin} onChange={(ev)=>setLinkedin(ev.target.value)}/>
                <label htmlFor="">github:</label>
                <input type="text"  className='border rounded-lg p-2' value={github} onChange={(ev)=>setGithub(ev.target.value)}/>
                <label htmlFor="">instagram:</label>
                <input type="text"  className='border rounded-lg p-2' value={instagram} onChange={(ev)=>setInstagram(ev.target.value)}/>
            </div>
            <button className='bg-green-300 text-white p-2 rounded-lg mt-3 w-full' onClick={()=>saveContacts()}>Save</button>
            <ToastContainer />
        </AdminLayout>
    );
}

export default Index;