import Layout from '@/components/layout';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Index() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        (async()=>{
            const result = await axios.get('/api/posts')
            setPosts(result.data)
        })()
    }, [])
    return (
        <Layout>
            <div>
                
            </div>
        </Layout>
    );
}

export default Index;