import React from 'react'

const SearchBar = ({onSearch}) => {
  return (
    <div className='container search-container my-2'>
      <input type="text"
      className='form-control p-3 border-success'
      placeholder='Search the Task'
      onChange={(e)=>onSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar
