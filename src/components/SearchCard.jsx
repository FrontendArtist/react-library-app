import React, { useState } from 'react'

const SearchCard = ({searchInput , searchInputHandler ,searchSubmit}) => {


  return (
    <div className='searchCard'>
      <input type="text" placeholder='search' value={searchInput} onChange={searchInputHandler}/>
      <input type="button" value={"search"}  onClick={searchSubmit}/>
    </div>
  )
}

export default SearchCard