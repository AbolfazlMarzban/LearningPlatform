import AdminLayout from '@/components/adminLayout';
import ProjectForm from '@/components/projectForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
function editProject() {
  const router = useRouter()
  const [projectInfo, setProjectInfo] = useState({})
  var {id} = router.query
  useEffect(() =>{
    if(!id){
        return;
    }
    axios.get("/api/projects?id="+id).then(response => {
        if(response.data){
            setProjectInfo(response.data)
        }
        console.log('projectInfo', projectInfo)
    })
  }, [id])
  return (
    <AdminLayout>
            <ProjectForm {...projectInfo} />
    </AdminLayout>
        
  );
}

export default editProject;