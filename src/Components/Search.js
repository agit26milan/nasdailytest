import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='row rectangle-search pad5'>
      <div className='col-10 p-left5'>
        <input />
      </div>
      <div className='col-2 text-center no-pad'>
        <FaSearch color='white' size={20} />
      </div>
    </div>
  )
}

export default SearchBar
