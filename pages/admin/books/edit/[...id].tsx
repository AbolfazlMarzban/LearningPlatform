import AdminLayout from '@/components/adminLayout';
import BookForm from '@/components/bookForm';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';



function EditBook() {
  const router = useRouter()
  const [bookInfo, setBookInfo] :any = useState({})
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
  return (
    <AdminLayout>
      {bookInfo && (
          <BookForm 
          {...bookInfo}
        />      
      )}
    </AdminLayout>
        
  );
}

export default EditBook;