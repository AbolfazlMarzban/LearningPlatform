import AdminLayout from '@/components/adminLayout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from 'react-modal';


function editProject() {
  const router = useRouter()
  const [projectInfo, setProjectInfo] :any = useState({})
  const [isOpen, setIsOpen] = useState(true)
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

  function goBack(){
    router.push('/admin/projects')
  }

  async function deleteProject(){
    await axios.delete('api/projects?id='+id)
  }

  if(projectInfo){
  return (
    <AdminLayout>
        <Modal isOpen={isOpen}>
            <h1>do you really want to delete {projectInfo.name} ?</h1>
            <div className="flex gap-2 justify-center">
                     <button className="btn-red" onClick={deleteProject}>Yes</button>
                     <button className="btn-default" onClick={goBack}>No</button>
                     </div>
        </Modal>
    </AdminLayout>
        
  );
  }
}

export default editProject;