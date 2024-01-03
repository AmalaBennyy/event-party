import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteCard, deleteEvent } from '../services/allAPI';


function Eventdisplay({eventdisplay,setDeleteEventStatus,ispresent}) {

  const removeEvent =async(id)=>{
    const response=await deleteEvent(id)
    setDeleteEventStatus(true)
  }

  
  //function to drag
  const cardDrag =(e,id)=>{
        console.log(`id ${id}`);
        e.dataTransfer.setData('cardId',id)  }

  return (
    <>
         <div className='container mt-5 ms-5'>
         <Card style={{ width: '15em',height:'400px' }}  draggable onDragStart={(e)=>cardDrag(e,eventdisplay?.id)}>
        <Card.Img height={'280px'} width={'350px'}  variant="top" src={eventdisplay.image} />
        <Card.Body  className='flex-column' >
          <Card.Title className='d-flex justify-content-between align-items-center flex-column'>
              <h6 className='text-center' >{eventdisplay.name}</h6>
              <h6 ><i class="fa-solid fa-location-dot me-1 text-warning" ></i>{eventdisplay.venue}</h6>
              <h6><i class="fa-solid fa-calendar-days me-2 text-warning"></i>{eventdisplay.date}</h6>
              <h6><i class="fa-regular fa-clock me-2 text-warning"></i>{eventdisplay.time}</h6>
              <h6><i class="fa-regular fa-envelope me-2 text-warning"></i>{eventdisplay.email}</h6>
          </Card.Title>
          { !ispresent &&
            <div className='d-flex '>
          {/* <Button className='bg-success text-white rounded me-5' style={{borderColor:'green'}}>Get Ticket</Button> */}
          
          <Button onClick={()=>removeEvent(eventdisplay?.id)} className='btn btn-danger d-flex' ><i class="fa-solid fa-trash-can"></i></Button>
        
            
          </div> }         
        </Card.Body>
      </Card>
         </div>   
    </>
  )
}

export default Eventdisplay