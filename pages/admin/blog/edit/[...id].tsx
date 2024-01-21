import AdminLayout from '@/components/adminLayout';
import ProjectForm from '@/components/projectForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import PostForm from '@/components/postForm';
function EditPost() {
  const router = useRouter()
  const [postInfo, setPostInfo] :any = useState({})
  var id = router.query.id
  useEffect(() =>{
    console.log('id', id)
    if(id){
       axios.get("/api/posts?id="+id[0]).then(response => {
        if(response.data){
            setPostInfo(response.data)
        }
    })
    }
   
  }, [id?.length])
  return (
    <AdminLayout>
      {postInfo && (
          <PostForm 
          {...postInfo}
        />      
      )}
    </AdminLayout>
        
  );
}

export default EditPost;