import Youtube from 'react-youtube'
import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import { imageUrl,API_Key } from '../../constants/constants'
import axios from '../../axios'

function Rowpost(props) {
  const [movies,setmovies] =useState([])
  const [urlid,seturlid]=useState('')
  const [showVideo, setShowVideo] = useState(false);

  useEffect(()=>{
   axios.get(props.url).then(response=>{
    console.log(response.data)
    setmovies(response.data.results)
   }).catch(err=>{
    // alert('network error')
   })


  },[props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handlemovie=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_Key}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.results.length!==0){
        seturlid(response.data.results[0])
        setShowVideo(true); 
      }else{
        console.log('Array empty')
      }
    })
    .catch(error => {
      console.error('Error fetching movie videos:', error);
      // Handle the error gracefully, e.g., display an error message to the user
    });
  }

  




  return (
    <div className='row'>
      <h2>{props.title}</h2>
    <div className="posters">
      {movies.map((obj)=>
        <img onClick={()=>handlemovie(obj.id)} className={props.isSmall ? 'smallposter'  : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

)}
        
    </div>
    
    {showVideo && (
        <div className="video-container">
          <Youtube
            videoId={urlid.key}
            opts={opts}
          />
          <button className='close-button' onClick={() => setShowVideo(false)}>Close</button> {/* Close button to hide the video */}
        </div>
      )}
    </div>
  )
}

export default Rowpost
