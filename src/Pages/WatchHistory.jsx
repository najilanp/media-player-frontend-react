import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { deleteAWatchHistory, getHistory } from '../services/allApi'

function WatchHistory() {

  const [history,setHistory]=useState([])

 
  

  const getWatchHistory=async()=>{
    //make api call
    const {data} =await getHistory()
    setHistory(data);
  }

  useEffect(()=>{
    getWatchHistory()
  },[])


  const removeAwatchHistory=async (id)=>{
   await deleteAWatchHistory (id)
   //get all history after deletion
    getWatchHistory()
   
  }

  
  return (
    <>
    <div className='d-flex justify-content-between align-items-center container mt-5 mb-5'>
      <h3>Watch History</h3>
      <Link to={"/home"} className='d-flex align-items-center'style={{textDecoration:'none',color:'white',fontSize:'20px'}}><i className='fa-solid fa-arrow-left fa-b me-2'></i>Back to home</Link>
    </div>
    <div className='container mt-5 mb-5'>
      <table className='table rounded shadow'>
        <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>url</th>
          <th>time stamp</th>
          <th>*</th>
        </tr>
        </thead>
        <tbody>
          {
            history.length>0?
            history.map((item,index)=>(
           <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td><a href={item?.embbedLink} target='_blank'>{item?.embbedLink}</a></td>
            <td>{item?.timeStamp}</td>
            <td><button onClick={()=>removeAwatchHistory(item?.id)} className='btn text-danger'><i className='fa-solid fa-trash  fs-5'></i></button></td>
          </tr>
            )):<p className='fw-bolder fs-5 text-danger mt-3'>sorry nothing to display</p>

          }
        </tbody>
      </table>

    </div>
    </>
  )
}

export default WatchHistory