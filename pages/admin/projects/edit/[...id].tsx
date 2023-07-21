import AdminLayout from '@/components/adminLayout';
import ProjectForm from '@/components/projectForm';
import { useState } from 'react';
function editProject() {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  return (
    <AdminLayout>
            <ProjectForm />
    </AdminLayout>
        
  );
}

export default editProject;