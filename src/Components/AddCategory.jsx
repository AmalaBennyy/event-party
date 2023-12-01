import React from 'react'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAcard, getAllCategories, updateCategory} from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import Eventdisplay from './Eventdisplay';

function AddCategory({setUploadCategoryStatus,uploadCategoryStatus}) {
  const [categories,setCategories]=useState([])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [category,setCategory]=useState("")




    // ------------------------------------------------------------
  
  const handleUploadCategory=async()=>{
    console.log(category);

    if(category){

      let body={
        category,
        allEvents:[]
      }
     const response=await addCategory(body)
     console.log(response);
     if(response.status>=200 && response.status<300){
      setUploadCategoryStatus()
      toast.success('Category Added Successfully')
      setCategory('')
      handleClose()
     }
     else{
      toast.error('Something Went Wrong...Please Try Later..!!')
     }

    }
    else{
      toast.warning('Please Enter Category Name')
    }
     
    
  
    
  }

  //function to get all categories
const allCategory = async()=>{
  const {data} = await getAllCategories()
  /* console.log(data); */
  setCategories(data)
}
console.log(categories);

//function to delete category

const removeCategory=async(id)=>{
  await deleteCategory(id)
  // to get the remaining category
  allCategory()
}
//function to prevent reload
const dragOver =(e)=>{
     e.preventDefault()
}

const cardDrop = async(e,categoryId)=>{
  console.log(`category id ${categoryId}`);
  //get data
   let cardId =  e.dataTransfer.getData('cardId')
   console.log(cardId);
  const {data} = await getAcard(cardId)
  console.log(data);
  const selectedCategory = categories.find(item=>item.id===categoryId)
  selectedCategory.allEvents.push(data)
  console.log(selectedCategory);

  await updateCategory(categoryId,selectedCategory)
  allCategory()

}


useEffect(()=>{
  allCategory()
},[uploadCategoryStatus])

  return (
    <> 
       <h3 className='text-center text-success mt-5 mb-4'>Categories</h3>
       <div className='d-flex justify-content-center align-items-center'> 
        <button type='button' className='btn btn-warning w-50'  onClick={handleShow}>ADD CATEGORY <i class="fa-solid fa-cloud-arrow-up ms-2"></i></button>
      </div>

     { categories?.length>0? 
     categories?.map((item)=>(<div className='mt-5 border border-secondary p-3 rounded me-2'>
     <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>cardDrop(e,item?.id)}>
       <h5 className=' text-warning'>{item.category}</h5>
       <button  onClick={()=>removeCategory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
     </div>
     <Row>
      <Col className='p-5'>
       {item?.allEvents?.length>0?
        item?.allEvents?.map(card=>(<Eventdisplay eventdisplay={card} ispresent={true}/>))
        :<p>No Category Added</p>
       }
      </Col>
     </Row>
   </div>
   ))
     :<p className='m-3 fw-bolder text-center fs-5 text-danger'>No category added</p>}
      <Modal show={show} onHide={handleClose} >
        <Modal.Header centered  closeButton >
          <Modal.Title centered><i class="fa-solid fa-cloud-arrow-up me-2"></i> Upload Category </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='Event Category' onChange={(e)=>setCategory(e.target.value)}  className='form-control rounded mt-3' />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
        <Button variant="success" onClick={handleUploadCategory}  className='w-25' >
            Upload
          </Button>
          <Button variant="danger" className='w-25' onClick={handleClose}>
            Close
          </Button>    
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>     
    </>
    
  )
}

export default AddCategory