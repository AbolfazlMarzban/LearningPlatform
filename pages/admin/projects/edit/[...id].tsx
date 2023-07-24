import AdminLayout from '@/components/adminLayout';
import ProjectForm from '@/components/projectForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
function editProject() {
  const router = useRouter()
  const [projectInfo, setProjectInfo] :any = useState({})
  var id = router.query.id
  useEffect(() =>{
    console.log('id', id)
    if(id){
       axios.get("/api/projects?id="+id[0]).then(response => {
        if(response.data){
            setProjectInfo(response.data)
        }
    })
    }
   
  }, [id?.length])
  return (
    <AdminLayout>
      {projectInfo && (
          <ProjectForm 
          {...projectInfo}
        />      
      )}
    </AdminLayout>
        
  );
}

export default editProject;