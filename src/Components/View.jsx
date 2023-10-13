import React from 'react'
import VideoCard from './VideoCard'
import { Row,Col } from 'react-bootstrap'
import { useState } from 'react'
import { useEffect } from 'react'
import {getAllVideos} from '../services/allApi'

function View({uploadVideoServerResponse}) {
  const [allVideos,setAllVideos]=useState([])
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)
  
  const getAllUploadedVideos=async()=>{
    const {data}=await getAllVideos()
    setAllVideos(data)
  }
 useEffect(()=>{
  setDeleteVideoStatus(false)
  getAllUploadedVideos()
 },[uploadVideoServerResponse,deleteVideoStatus])
//  console.log(allVideos);
  return (
    <>
    <Row>
      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}> 
          <VideoCard setDeleteVideoStatus={setDeleteVideoStatus} displayData={video}/>
          </Col>
        ))
        : <p className='fw-bolder fs-5 text-danger mt-3'>sorry nothing to display</p>  
}
    </Row>  
    </>
  )
}

export default View