import React, { useState } from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import {useNavigate} from 'react-router-dom'


function Landingpage() {
  const [cards,setCards]=useState(Array.from({length:5}))

  const navigateByUrl =useNavigate()
  const navigate=()=>{
    navigateByUrl('/home')
  }



  return (
    <>

    <Row className='mb-5 mt-5 align-items-center'>
      <Col></Col>
       <Col md={4}>
        <h3 className='mb-3'>Welcome to <span className='text-warning'>Meadia Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aliquid enim vitae, eius labore quisquam iusto atque cupiditate porro saepe laborum quasi doloremque? Ipsa magni vel suscipit laboriosam voluptas laudantium?</p>
        <button onClick={navigate} className='btn btn-success fw-bolder'>Get Started</button>
       </Col>
       <Col></Col>
       <Col md={6}>
           <img style={{width:'350px',height:'350px'}} src="https://media.licdn.com/dms/image/D4E22AQENGa9ukaQvng/feedshare-shrink_2048_1536/0/1686936717821?e=1698278400&v=beta&t=B7pEeYSO6BYP9FE4jAvVyFG6XvdG-XP2hC2oeA7q1ck" alt="no image" />
       </Col>

    </Row>

    <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center'>

      <h3>Features</h3>

      <InfiniteScroll dataLength={cards.length}  >
        {
        cards.map((item,index)=>{
          return(
<div className='mt-5 features d-flex justify-content-between w-100'>
  
  <Card className='p-3 me-5' style={{ width: '18rem' }}>
  <Card.Img style={{height:'200px',width:'250px'}} variant="top" src="https://i.pinimg.com/originals/0c/cd/96/0ccd96bc52dc46b1f5f3ea89cad58ecb.gif" />
  <Card.Body>
    <Card.Title>Managing Videos</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card className='p-3 me-5' style={{ width: '18rem' }}>
  <Card.Img style={{height:'200px',width:'250px'}} variant="top" src="https://media.tenor.com/YtAOA9y7VG0AAAAM/loading.gif" />
  <Card.Body>
    <Card.Title>Categories Videos</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>

<Card className='p-3' style={{ width: '18rem' }}>
  <Card.Img style={{height:'200px',width:'250px'}} variant="top" src="https://media.tenor.com/tYIUpIiF-LIAAAAC/youtube-logo.gif" />
  <Card.Body>
    <Card.Title>Watch History</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
  </Card.Body>
</Card>



  </div>
          )
        })
        }
        
      </InfiniteScroll>
    </div>


    <div className='container border rounded p-5 mt-5 mb-5 d-flex justify-content-between align-items-center border-secondary shadow'>
     <div className='content'>
      <h4 className='text-warning mb-5'>Simple, Fast and powerful</h4>
      <h6><span className='fs-5 me-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi, repudiandae laudantium reiciendis possimus porro provident atque dolore a velit aut, neque distinctio iste? Ab, iste! Dicta quidem ut vero!</h6>
      <h6><span className='fs-5 me-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi, repudiandae laudantium reiciendis possimus porro provident atque dolore a velit aut, neque distinctio iste? Ab, iste! Dicta quidem ut vero!</h6>
      <h6><span className='fs-5 me-5'>Play Everything:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Est modi, repudiandae laudantium reiciendis possimus porro provident atque dolore a velit aut, neque distinctio iste? Ab, iste! Dicta quidem ut vero!</h6>
     </div>
     <div className='video'>
     <iframe width="668" height="387" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     </div>
    </div>
    </>
  )
}

export default Landingpage