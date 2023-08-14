import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'

const  upComing = `https://api.themoviedb.org/3/movie/popular?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`
const  Popular = `https://api.themoviedb.org/3/movie/upcoming?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`
//const  Trending = `https://api.themoviedb.org/3/movies/popular?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`
const  TopRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`
//const  Horror = `https://api.themoviedb.org/3/movies/popular?api_key=795a3506c189ef36069dfe62c5e6dcea&language=en-US&page=1`

function Home() {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Up Coming' fetchURL={upComing}/>
        <Row rowID='2'  title='Popular' fetchURL={Popular}/>
        
        <Row rowID='3'  title='Top Rated' fetchURL={TopRated}/>
       
    </div>
  )
}

export default Home