import React, {useState,useEffect} from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import {imageUrl,API_KEY} from '../Constants/Constants'
import axios from '../axios'
function RowPost(props) {
    const [movie, setmovie] = useState([])
    const [trailerKey, setTrailerKey] = useState()
    useEffect(() => {
      axios.get(props.urls).then(response=>{
          setmovie(response.data.results)
      })
   
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie =(id)=>{
      axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
          if(response.data.results.length!==0){
              console.log(response.data.results[0].key)
              setTrailerKey(response.data.results[0])
          }
          else{
              console.log("Trailer not Found");
          }
          
      })
    }
    
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {movie.map((obj)=>
                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}
               
               
            </div>
             {trailerKey && <YouTube videoId={trailerKey.key} opts={opts} />} 
        </div>
    )
}

export default RowPost
