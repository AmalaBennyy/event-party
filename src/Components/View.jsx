import React, { useEffect, useState } from 'react'
import Eventdisplay from './Eventdisplay';
import { Col, Row } from 'react-bootstrap';
import { getAllEvents } from '../services/allAPI';

function View({uploadEventStatus}) {

  const [allevents,setAllEvents] = useState([])

  const [deleteEventStatus , setDeleteEventStatus] =useState(false)

    const getAllUploadedevents = async()=>{
        const response = await getAllEvents()
        const {data} = response
        setAllEvents(data)
    }

    console.log(allevents);
    
    useEffect(()=>{
        getAllUploadedevents()
        setDeleteEventStatus(false)
    },[deleteEventStatus,uploadEventStatus])
  return (
    <>
    <Row>
      {allevents?.length>0?
      allevents.map((events)=>(<Col sm={12} md={4} >
        <Eventdisplay eventdisplay={events} setDeleteEventStatus={setDeleteEventStatus}/>
      </Col>))
        :
      <p className='m-3 fw-bolder text-center fs-5 text-danger'>Nothing to display</p>
      }
      
    </Row>
      
    </>
  )
}

export default View