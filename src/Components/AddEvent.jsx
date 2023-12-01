import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { uploadEvent } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddEvent({setUploadEventStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [event,setEvent]=useState({
    id:'',
    image:'',
    name:'',
    email:'',
    venue:'',
    time:'',
    date:''
  })
  console.log(event);

  const handleUpload=async()=>{
    const {id,name,venue,time,image,email}=event
    if(!id || !name || !venue || !time || !image || !email){
      toast.warning('Please fill the Form Completly !!')
    }
    else{
     const response = await uploadEvent(event)
     console.log(response);
     if(response.status>=200 && response.status<300){
      setUploadEventStatus(response.data)
      toast.success('Uploaded Successfully')
      //close modal
      handleClose()
     }
     else{
      console.log(response);
      toast.warning('Something went wrong...Try again later')
     }
    }
  }

  return (
    <>
      <div className='mt-5'>
      <h3 className='text-center text-success mb-4'>Events</h3>
       <div className=' d-flex justify-content-center align-items-center'>
          <button type='button' className='btn btn-primary w-50'  onClick={handleShow}>ADD EVENTS <i class="fa-solid fa-cloud-arrow-up ms-2"></i></button>
       </div>   
       <Modal show={show} onHide={handleClose} >
        <Modal.Header centered  closeButton >
          <Modal.Title centered><i class="fa-solid fa-cloud-arrow-up me-2"></i> Upload Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder='Event Id' onChange={(e)=>setEvent({...event,id:e.target.value})} className='form-control rounded mt-3' />
          <input type="text" placeholder='Event Image' onChange={(e)=>setEvent({...event,image:e.target.value})} className='form-control rounded mt-3' />
          <input type="text" placeholder='Event Name' onChange={(e)=>setEvent({...event,name:e.target.value})} className='form-control rounded mt-3' />
          <input type="email" placeholder='E-mail' onChange={(e)=>setEvent({...event,email:e.target.value})} className='form-control rounded mt-3' />
          <input type="text" placeholder='Venue' onChange={(e)=>setEvent({...event,venue:e.target.value})} className='form-control rounded mt-3' />
          <input type="date" placeholder='date' onChange={(e)=>setEvent({...event,date:e.target.value})} className='form-control rounded mt-3' />
          <input type="time" placeholder='Time' onChange={(e)=>setEvent({...event,time:e.target.value})} className='form-control rounded mt-3' />   
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center align-items-center'>
        <Button variant="success" onClick={handleUpload} className='w-25' >
            Upload
          </Button>
          <Button variant="danger" className='w-25' onClick={handleClose}>
            Close
          </Button>    
        </Modal.Footer>
      </Modal>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>     
    </>
  )
}

export default AddEvent