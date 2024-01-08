import AdminLayout from '@/components/adminLayout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from 'react-modal';


function DeleteBook() {
  const router = useRouter()
  const [bookInfo, setBookInfo] :any = useState({})
  const [isOpen, setIsOpen] = useState(true)
  var id = router.query.id
  useEffect(() =>{
    console.log('id', id)
    if(id){
       axios.get("/api/books?id="+id[0]).then(response => {
        if(response.data){
            setBookInfo(response.data)
        }
    })
    }
   
  }, [id?.length])

  function goBack(){
    router.push('/admin/books')
  }

  async function deleteBook(){
    const result = await axios.delete(`/api/books?id=${bookInfo._id}`)
    if(result){
      goBack()
    }
  }

  if(bookInfo){
  return (
    <AdminLayout>
        <Modal isOpen={isOpen}>
            <h1 className='text-center'>do you really want to delete {bookInfo.name} ?</h1>
            <div className="flex gap-5 justify-center py-3">
                     <button className="bg-red-500 px-3 text-white rounded" onClick={deleteBook}>Yes</button>
                     <button className="bg-green-500 px-3 text-white rounded" onClick={goBack}>No</button>
                     </div>
        </Modal>
    </AdminLayout>
        
  );
  }
}

export default DeleteBook;