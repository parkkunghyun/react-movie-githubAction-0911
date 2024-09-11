import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className='max-w-[300px] bg-[#ffffe0] shadow-md rounded-lg overflow-hidden m-4 cursor-pointer hover:scale-105'>
      <img src={movie.Poster} alt={movie.Title} className='w-full h-[400px] object-cover' />
      <div className='p-4'>
        <h3 className='text-xl font-bold text-black'>{movie.Title}</h3>
        <p className='text-gray-700'>{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;
