import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BookCard from "./components/BookCard";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState(null);

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchData={searchData}
        setSearchData={setSearchData}
      />
      <div className="book-display">
        {searchData
          ? searchData
              .map(data => data.volumeInfo)
              .map(book => (
                <BookCard
                  image={book.imageLinks.smallThumbnail}
                  title={book.title}
                  author={book.authors.join(", ")}
                  publisher={book.publisher ? book.publisher : "Unknown"}
                />
              ))
          : ""}
      </div>
    </>
  );
}

export default App;
