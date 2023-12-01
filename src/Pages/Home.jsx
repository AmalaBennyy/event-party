import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className='body w-100' style={{backgroundImage: `url("https://assets-global.website-files.com/63768e1144af8e15dab91994/63c126a1dc1eff448bfb6a9f_fog%20machine.webp")`,height:'730px',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
           <div className='d-flex align-items-center justify-content-center flex-column' style={{height:'80vh'}}>
                <h1 style={{color:'black'}}>Party Makers</h1>
                <h3 >Feel the beats, move your feet</h3>
                    <Link className='d-flex align-items-center justify-content-center' style={{textDecoration:'none',width:'300px'}} to={'/event'}><button className='btn btn-danger w-100 mt-4 me-3 rounded'>EVENTS</button></Link>
           </div>
        </div>

        <div>
           
            <Row >
            <Col md={6} className='mt-3'>
                <img src="https://www.datocms-assets.com/17746/1649242141-club-dj-career-header.jpg" alt="no image" style={{width:'100%',height:'500px'}} />
            </Col>
            <Col md={6} className='mt-5'>
                <h3 className='text-center text-warning mt-5'>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam expedita debitis dolor harum eum? Vero libero officiis odio atque repellat consequatur amet. Numquam ad eos, quos vel laudantium pariatur odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vel quasi doloremque tempore soluta veritatis corporis enim ab. Libero mollitia alias officia adipisci voluptatum. Assumenda aspernatur corrupti distinctio recusandae fuga. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veritatis minima repellendus laborum soluta pariatur quia modi rem eaque nesciunt! Reprehenderit reiciendis illum fugiat sunt provident possimus praesentium dolorum magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, minima rem? Nulla vero dolor vel quia fuga delectus ducimus? Expedita tempora molestias modi totam ipsum sed quaerat ducimus nulla itaque.</p>
            </Col>
            </Row>
            
        </div>
        <h2 className='d-flex align-items-center justify-content-center mt-5 text-warning' >TICKETS</h2>
        <div className='w-100 mt-5 mb-5 d-flex align-items-center justify-content-center'>
            
            <Row>
                <Col md={4} className='card shadow text-center me-5' style={{width:'300px', backgroundRepeat:'no-repeat',backgroundSize:'cover',  backgroundImage:`url("https://us.123rf.com/450wm/deagreez/deagreez2010/deagreez201007074/158019992-photo-of-big-company-many-carefree-people-raise-arms-concert-wear-stylish-trendy-outfit-modern-club.jpg?ver=6")`}}>
                   <h3 className='mb-3 mt-3 text-danger'>STANDARD</h3>
                    <h6 style={{color:'black'}} className='fw-bolder'>ACCESS TO MAIN <br />
                        DANCEFLOOR <br />
                        2 BARS ZONES <br />
                        SANITARY AREAS</h6>

                    <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid et nemo qui necessitatibus fugit placeat id odio commodi recusandae? Magni consequatur sapiente molestias fugiat. Odit quia recusandae cumque vel?</p>

                    <h5><b>$ 19</b></h5>

                    <button className='btn btn-danger mt-3 mb-4'>BUY</button>

                </Col>
                <Col md={4} className='card shadow text-center me-5' style={{ width:'300px' , backgroundRepeat:'no-repeat',backgroundSize:'cover',  backgroundImage:`url("https://us.123rf.com/450wm/deagreez/deagreez2010/deagreez201007074/158019992-photo-of-big-company-many-carefree-people-raise-arms-concert-wear-stylish-trendy-outfit-modern-club.jpg?ver=6")`}}>
                    <h3 className='mb-3 mt-3 text-danger'>VIP</h3>
                    <h6 style={{color:'black'}} className='fw-bolder'>ACCESS TO MAIN <br />
                        DANCEFLOOR <br />
                        2 BARS ZONES <br />
                        SANITARY AREAS</h6>

                    <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid et nemo qui necessitatibus fugit placeat id odio commodi recusandae? Magni consequatur sapiente molestias fugiat. Odit quia recusandae cumque vel?</p>

                    <h5><b>$ 49</b></h5>

                    <button className='btn btn-danger mt-3 mb-4'>BUY</button>

                </Col>
                <Col md={4} className='card shadow text-center me-5' style={{ width:'300px', backgroundRepeat:'no-repeat',backgroundSize:'cover',  backgroundImage:`url("https://us.123rf.com/450wm/deagreez/deagreez2010/deagreez201007074/158019992-photo-of-big-company-many-carefree-people-raise-arms-concert-wear-stylish-trendy-outfit-modern-club.jpg?ver=6")`}}>
                   <h3 className='mb-3 mt-3 text-danger'>GROUP</h3>
                    <h6 style={{color:'black'}} className='fw-bolder'>ACCESS TO MAIN <br />
                        DANCEFLOOR <br />
                        2 BARS ZONES <br />
                        SANITARY AREAS</h6>

                    <p className='mt-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate aliquid et nemo qui necessitatibus fugit placeat id odio commodi recusandae? Magni consequatur sapiente molestias fugiat. Odit quia recusandae cumque vel?</p>

                    <h5><b>$ 99</b></h5>

                    <button className='btn btn-danger mt-3 mb-4'>BUY</button>

                </Col>
            </Row>
        </div>


        <div>
           
           <Row >
           <Col md={6} className='ms-5'>
               <img src="https://www.forwardleeds.co.uk/wp-content/uploads/2022/03/Party-Properly-Drug-Safety.jpg" alt="n image" style={{width:'100%',height:'500px'}} />
           </Col>
           <Col md={6} className='mt-5 w-25 ' style={{marginLeft:'120px'}}>
               <h3 className='text-center mt-5 mb-3 text-warning'>Contact Us</h3>
               <h6><i class="fa-sharp fa-solid fa-location-dot me-2 text-danger"></i>PARTY MAKERS,Goa, 2292 Peachtree Rd NW</h6>
               <h6><i class="fa-solid fa-envelope me-2 text-danger"></i>hello@partymakers.com</h6>
               <h6><i class="fa-solid fa-phone me-2 text-danger"></i>+1 800 787 7000</h6>
               <input type="text" placeholder='Enter Name' className='form-control rounded mt-3' />
               <input type="text" placeholder='Enter Email' className='form-control rounded mt-3' />
               <textarea name="" placeholder='Enter Your Message' className='form-control rounded mt-3' id=""></textarea>
               <div className='d-flex justify-content-center align-items-center '><button className='btn btn-danger p-2 mt-3 rounded w-100'>SUBMIT</button></div>
           </Col>
           </Row>
           
       </div>
    </>
  )
}

export default Home