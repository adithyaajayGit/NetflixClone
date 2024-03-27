import React, { useEffect, useState } from 'react'
import { API_Key,imageUrl } from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const [movie,setmovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
            console.log(response.data)
            const moviesWithTitles = response.data.results.filter(movie => movie.title);
            const randomIndex = Math.floor(Math.random() * moviesWithTitles.length);
            setmovie(moviesWithTitles[randomIndex]);
        })
    },[])
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='bannerbutton'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
                </div>
            <h1 className='discription'>{movie ? movie.overview : ""}</h1>
            </div>
         <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
