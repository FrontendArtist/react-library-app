import React, { useState } from "react";
import Favorites from "./Favorites";
import SearchCard from "./SearchCard";
import { books } from "../constants/mockData";
import BooksCard from "./BooksCard";
const Books = () => {
  //---------------------------------
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searched, setSearched] = useState(false);

  const searchInputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const searchSubmit = () => {
    if (searchInput.length!==0) {
      setSearched(true);
      const findedBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchInput.toLowerCase().trim())
      );
      setFilteredBooks(findedBooks);
      console.log(filteredBooks);
        
    }else{
      setSearched(false)
    }
    
  };
  //---------------------------------

  const [favorites, setFavorites] = useState([]);

  const favoriteHandler = (book, status) => {
    console.log(book, status);

    if (status) {
      const newFav = favorites.filter((fav) => fav.id !== book.id);
      setFavorites(newFav);
      console.log(favorites);
    } else {
      setFavorites((favorites) => [...favorites, book]);
      console.log(favorites);
    }
  };
  //---------------------------------

  return (
    <>
      <SearchCard
        search={searchInput}
        searchInputHandler={searchInputHandler}
        searchSubmit={searchSubmit}
      />
      <div className="bookLayout">
        <div className="cards">
          {
            // search.length!==0?
            // filteredBooks.map((book) => (
            //   <BooksCard
            //     key={book.id}
            //     book={book}
            //     favoriteHandler={favoriteHandler}
            //   />
            // )):

            searched
              ? filteredBooks.map((book) => (
                  <BooksCard
                    key={book.id}
                    book={book}
                    favoriteHandler={favoriteHandler}
                  />
                ))
              : books.map((book) => (
                  <BooksCard
                    key={book.id}
                    book={book}
                    favoriteHandler={favoriteHandler}
                  />
                ))
          }
        </div>

        {!!favorites.length && (
          <div className="favLayout">
            <h2>favorites</h2>
            <div className="favorites">
              <Favorites favorites={favorites} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Books;
