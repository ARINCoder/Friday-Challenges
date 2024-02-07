import React from 'react'
import '../SearchComponent/SearchComponent.css'

const SearchComponent = ({searchInput, handleChange, handleDown}) => {

  return (
    <div className='search-component'>
        <input type="text" value={searchInput} 
        onChange={handleChange}
        onKeyDown={handleDown} />

    </div>
  )
}

export default SearchComponent