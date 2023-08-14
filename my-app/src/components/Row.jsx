import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from './Movie';
//38:00

function Row({title, fetchURL, rowID}) {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })

  },[fetchURL])

  const slideLeft = () => {
      var slider =document.getElementById('slider' + rowID)
      slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
      var slider =document.getElementById('slider' + rowID)
      slider.scrollLeft = slider.scrollLeft + 500;
  }


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0' size={40}/>
          <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id) =>(
            <Movie key={1} item={item} />
            ))}
          </div>
          <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' size={40} />
      </div>
    </>
  )
}

//group changes child div

export default Row