import React from 'react'
import { useState } from 'react';

const BooksCard = ({book , favoriteHandler}) => {
    const {id , author , country , image, language , link , pages , title, year } = book;


    const [fav , setFav] = useState(false)

    const favHandler = ()=>{
        setFav(fav => !fav);
        favoriteHandler(book , fav )
    }
  return (
    <div className='bookCard'>
        <div className='bookInfo'>
            <img src={image} alt="{title}" />
            <div>
                <p className="title">{title}</p>
                <p className="author">{author}</p>
                <p className="pages">{pages}</p>
            </div>
        </div>
        <button style={{ color: fav ? "red" : "white"}} onClick={favHandler}>♥</button>
    </div>
  )
}

export default BooksCard