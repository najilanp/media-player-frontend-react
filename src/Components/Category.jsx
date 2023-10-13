import React , {useEffect, useState} from 'react'
import {Modal,Button,Form,Row,Col}from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allApi';
import VideoCard from './VideoCard';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryName,setCategoryName]=useState("")
  const [categories,setCategories]=useState([])
  

  const insertCategory=async()=>{
    if(categoryName){
      let body={
        categoryName,allVideos:[]
      }
      //make api call
      const response=await addCategory(body)
      if(response.status>=200 && response.status<300){
        //reset state
        setCategoryName("")
        //modal hide
        handleClose()
        //call getcategories
        getCategories()
       
      }else{
        toast.error("uploading error")
      }
      // console.log(response);

    }else{
   toast.info("please fill the form")
    }

  }

  const getCategories=async()=>{
    const{data}=await getAllCategory()
    setCategories(data)
  }

  const removeCategory = async (id)=>{
    //make api call
    await deleteCategory(id)
    //get all category
    getCategories()
  }

  useEffect(()=>{
    getCategories()
  },[])

   const dragOverCategory=(e)=>{
    console.log("drag overing");
    e.preventDefault()
   }

   const videoDrop=async(e,categoryId)=>{
    console.log("inside drop function")
    console.log("category id:"+categoryId);
    const videoCardId=e.dataTransfer.getData("cardId")
    console.log("video card id :"+videoCardId);
    // get video details
    const {data}=await getAVideo(videoCardId)
    let selectedCategory=categories.find(item=>item.id===categoryId)
    selectedCategory.allVideos.push(data)
    await updateCategory(categoryId,selectedCategory)
    getCategories()

   }


  return (
   <>

   <div className ="d-grid">
    <button onClick={handleShow} className='btn btn-info'>Add Category</button>
   </div>
   {
    categories?categories.map(item=>(
      <div className='border p-3 rounded mt-3 mb-3' droppable onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
        <div className='d-flex justify-content-between'>
            <h5>{item?.categoryName}</h5>
            <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
        </div>
        <Row>
          {
            item?.allVideos&& item?.allVideos.map(card=>(
              <Col sm={12} className='p-1 mb-2'>
              <VideoCard displayData={card} insideCategory={true}/>
              </Col>
            ))
          }
        </Row>
      </div>
    )):<p className='fw-bolder fs-5 text-danger mt-3'>sorry nothing to display</p>
   }

   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border rounded p-4'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter category name" onChange={e=>setCategoryName(e.target.value)} /> 
        </Form.Group>
        
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Cancel
          </Button>
          <Button variant="primary" onClick={insertCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   </>
  )
}

export default Category