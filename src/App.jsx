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
  };

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        handleSearch={handleSearch}
      />
      <div className="book-display">
        {searchData
          ? searchData
              .map(data => data.volumeInfo)
              .map(book => (
                <BookCard
                  key={book.industryIdentifiers[0].identifier}
                  image={book.imageLinks.smallThumbnail || "None"}
                  title={book.title}
                  author={book.authors ? book.authors.join(", ") : "Unknown"}
                  publisher={book.publisher || "Unknown"}
                  link={book.infoLink}
                />
              ))
          : ""}
      </div>
    </>
  );
}

export default App;
