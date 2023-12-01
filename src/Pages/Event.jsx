import React, { useState } from 'react'
import AddEvent from '../Components/AddEvent';
import { Col, Row } from 'react-bootstrap';
import AddCategory from '../Components/AddCategory';
import View from '../Components/View';

function Event() {

  const[uploadEventStatus,setUploadEventStatus]=useState({})
  const[uploadCategoryStatus,setUploadCategoryStatus]=useState({})

  return (
    <div className='w-100' style={{backgroundImage:`url("https://wallup.net/wp-content/uploads/2017/11/17/200514-dark-blue.jpg")`,height:'100%'}}>
      <div className='d-flex justify-content-center align-items-center'>
            <h2 className='mt-3'>Our <span className='text-warning'>EVENTS</span></h2>
      </div>

    <Row>
       <Col md={8}> 
       <AddEvent setUploadEventStatus={setUploadEventStatus}/>
       <View uploadEventStatus={uploadEventStatus}/>
       </Col>
       <Col md={4}> 
       <AddCategory setUploadCategoryStatus={setUploadCategoryStatus} uploadCategoryStatus={uploadCategoryStatus}/>
       </Col>
    </Row>
    <Row>
      <Col md={8}>
        
      </Col>
      <Col md={4} className='mt-5 '>
      </Col>
    </Row>

    </div>
  )
}

export default Event