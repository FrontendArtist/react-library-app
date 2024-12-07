import React from 'react'

const Favorites = ({favorites}) => {
  return (
    <>
    {
        favorites.map(fav=>
            <div className='favorited' key={fav.id}>
                <img src={fav.image} alt={fav.title} />
                <p>{fav.title}</p>
            </div>
        )
    }
    </>
  )
}

export default Favorites