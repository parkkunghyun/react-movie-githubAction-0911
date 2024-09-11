import './App.css';
import { useEffect, useState } from 'react'

import Search from './components/Search';
import MoviCard from './components/MoviCard';

// 9509eb9c
const API_URL = "http://www.omdbapi.com/?apikey=9509eb9c"

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const searchMovies = async (title) => {
    setLoading(true)
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search || [])
    console.log(data)
    setLoading(false)
  }
  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="App flex flex-col items-center">
      <h1 className='text-[100px] font-bold mb-[40px]'>Movie Land</h1>
      <Search onSearch={searchMovies}/>
      {
        loading ? (
          <p className='text-[80px]'>영화 검색 중 입니다... </p>
        ): (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center'>
              {
                movies.map((movie) => (
                  <MoviCard key={movie.imdbID} movie={movie} />
                ))}
        </div>
        )
      }
    </div>
  );
}

export default App;
