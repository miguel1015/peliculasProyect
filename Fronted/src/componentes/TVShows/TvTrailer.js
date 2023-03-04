import React from 'react'
import { Fragment , useEffect, useState } from 'react'
import movieTrailer from "movie-trailer"
import ReactPlayer from "react-player"


export default function TvTrailer({TvShowTitle}) {
  
    const [video, setVideo] = useState("")
    const [videoUrl, setVideoUrl] = useState("")


    function handlesearch  ()  {
        setVideo(TvShowTitle)
        movieTrailer(video).then((res) => {
         setVideoUrl(res)
        } )
       }
    
      useEffect(() =>{
        handlesearch()
      }, [videoUrl] ) 
  
    return (
    <div>
        <Fragment>
        <div className='containerTrailer' >
        </div>
        <div>
          <ReactPlayer url={videoUrl} controls={true} width={"1000px"} height={"700px"}  className="trailershows"/>  
        </div>  
    </Fragment> 
    </div>
  )
}
