import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";
import getBooks from "./api.js";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearch = async () => {
    const response = await getBooks(searchInput);
    setSearchData(response.items);
    console.log(searchData);
  };

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <div className="book-display">
        {searchData ? (
          searchData
            .map(data => data.volumeInfo)
            .map(book => (
              <BookCard
                image={book.imageLinks.smallThumbnail}
                title={book.title}
                author={book.authors.join(", ")}
                publisher={book.publisher ? book.publisher : "Unknown"}
              />
            ))
        ) : (
          <p className="no-books">No books were found</p>
        )}
      </div>
    </>
  );
}

export default App;
