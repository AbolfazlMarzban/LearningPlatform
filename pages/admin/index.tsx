import Layout from '@/components/layout';
import React from 'react';

function index() {
    return (
        <Layout>
            <div className='bg-white w-full flex'>
                <div className='basis-1/4'>
                    <h1>list</h1>
                </div>
                <div className='basis-1/2'>
                    <h2>list pages</h2>
                </div>
            </div>
        </Layout>
    );
}

export default index;