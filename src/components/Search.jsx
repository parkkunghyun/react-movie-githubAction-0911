import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const Search = ({onSearch}) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    onSearch(text)
  }

  return (
    <form onSubmit={handleSubmit} className='w-full mb-[80px] max-w-[600px] border rounded-[20px] p-4 flex bg-[#ffffe0] justify-between items-center gap-4 sm:max-w-[50%] lg:max-w-[40%] xl:max-w-[30%]'>
      <input value={text} onChange={(e) => setText(e.target.value)} type='text' 
        className='px-4 flex-grow text-black text-2xl bg-[#ffffe0] w-full'/>
      <button type='submit' className='flex-shrink-0'>
        <FaSearch className='text-black text-[30px] mx-2 cursor-pointer'/>
      </button>
    </form>
  )
}

export default Search
