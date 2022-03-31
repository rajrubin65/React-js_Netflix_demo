import React, {useEffect,useState} from 'react'
import {API_KEY,imageUrl} from '../Constants/Constants'
import './Banner.css'
import axios from '../axios'
import YouTube from 'react-youtube'


function Banner() {
    const [movie, setMovie] = useState();
    const [trailerKey,setTrailerKey] =useState();


    useEffect(() => {
      axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
         console.log(response.data.results[0]);
         setMovie(response.data.results[0]);
      })
 
    }, [])

    
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
   

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const handleMovie =(id)=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            let movieID =getRandomInt(response.data.results.length)
            setMovie(response.data.results[movieID]);
         })
       
    }
    
    return (
        <div 
        style={{ backgroundImage: `url(${movie ? imageUrl+ movie.backdrop_path:""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title:""}</h1>
                <div className='banner_buttons' >
                    <button onClick={()=>handleMovie(movie.id)} className='button' >Next</button>
                    {/* <button className='button' >My list</button> */}
                </div>
                <h1 className='description'>{movie ? movie.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        {/* {trailerKey && <YouTube videoId={trailerKey.key} opts={opts} />}
         */}
        </div>
    )
}

export default Banner
