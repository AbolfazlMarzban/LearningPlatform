import AdminLayout from '@/components/adminLayout';
import React from 'react';

function Index() {
    return (
        <AdminLayout>
            <div className='flex flex-col'>
                <textarea name="" id="" cols={30} rows={10} className='border rounded-lg outline-0 p-2'></textarea>
                <button className='p-2 rounded-lg mt-2 text-white bg-green-400'> 
                    save
                </button>
            </div>
        </AdminLayout>
    );
}

export default Index;