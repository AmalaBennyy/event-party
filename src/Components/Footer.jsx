import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div style={{width:"100%",height:"300px",}} className=' d-flex justify-content-center align-items-center flex-column mt-5'>
      <div className='footer d-flex justify-content-evenly align-items-center w-100 mb-5'>
      <div className='website ' style={{width:"400px"}}>
        <h4><i class="fa-solid fa-drum fa-2x text-warning"></i>{' '}Party Makers</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repudiandae error dolorum, voluptatum, nesciunt sapiente placeat ullam soluta ea ipsam, fugit ipsum pariatur accusamus nemo a consectetur autem quibusdam maxime!</p>
        <p> sit amet consectetur, adipisicing elit</p>
      </div>
      <div className='links d-flex flex-column'>
        <h3>Links</h3>
        <Link to={'/'} style={{textDecoration:"none",color:"white"}}>Home</Link>
        <Link to={'/event'} style={{textDecoration:"none",color:"white"}}>Event</Link>
      </div>
      <div className='guides d-flex flex-column'>
        <h4>Guides</h4>
        <Link to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>react</Link>
        <Link  to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>react bootstrap</Link>
        <Link  to={'https://bootswatch.com'} style={{textDecoration:"none",color:"white"}}>bootswatch</Link>
      </div>
      
      </div>
      <p >Copyright © 2023 Part Makers .Built with React</p>
    </div>
  )
}
export default Footer