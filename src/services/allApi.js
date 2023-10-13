import { BASE_URL } from "./baseURL"
import {commonAPI} from "./commonAPI"


//uploading video
export const uploadVideo = async(video)=>{
//http post request to http://localhost:4000/videos for adding videod in json server and return response to add component
return await commonAPI("POST",`${BASE_URL}/videos`,video)
}

//get all videos from json server
export const getAllVideos = async()=>{
    //http get request to http://localhost:4000/videos for getting videos from json server and return response to view component
    return await commonAPI("GET",`${BASE_URL}/videos`,"")
    }

    
//get a single video from json server
export const getAVideo = async(id)=>{
    //http get request to http://localhost:4000/videos for getting a video from json server and return response to videocard component
    return await commonAPI("GET",`${BASE_URL}/videos/${id}`,"")
    }

    //delete a single video from json server
export const deleteAVideos = async(id)=>{
    //http delete request to http://localhost:4000/videos for deleting a video from json server and return response to videocard component
    return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`,{})
    }


    //inser vdo in watch history
    export const addToHistory=async(videoHistory)=>{
        //http post request to http://localhost:4000/history for adding vdo history to json server and return response to vdocard
        return await commonAPI("POST",`${BASE_URL}/history`,videoHistory)
    }

    //get vdo watch history from json server
    export const getHistory=async ()=>{
        //http getrequest to http://localhost:4000/history to get vdo history from json server and return response to watch history
        return await commonAPI("GET",`${BASE_URL}/history`,"")
    }


    //adding category   
export const addCategory = async(body)=>{
    //http post request to http://localhost:4000/category for adding category in json server and return response to category component
    return await commonAPI("POST",`${BASE_URL}/category`,body)
    }

    //get all category   
export const getAllCategory = async()=>{
    //http get request to http://localhost:4000/category for gtting categoryvideo fromjson server and return response to category component
    return await commonAPI("GET",`${BASE_URL}/category`,"")
    }

    //delete particular category from json server
    export const deleteCategory = async (id)=>{
        //http delete request to http://localhost:4000/category/id for deleting vdo from json server and return response to category component
        return await commonAPI("DELETE",`${BASE_URL}/category/${id}`,{})
    }
    //update category from json server
    export const updateCategory=async(id,updatedCategoryBody)=>{
                //http put request to http://localhost:4000/category/id for updating existing category from json server and return response to category component

        return await commonAPI("PUT",`${BASE_URL}/category/${id}`,updatedCategoryBody)
    }


    export const deleteAWatchHistory=async(id)=>{
    //http delete request to http://localhost:4000/history/id fordeleting an history from json server and return response to watch history component

        return await commonAPI("DELETE",`${BASE_URL}/history/${id}`,{})
    }

