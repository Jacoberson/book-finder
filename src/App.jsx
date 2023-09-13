import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import BookDisplay from "./components/BookDisplay";
import EmptyList from "./components/EmptyList";
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
      {searchData ? <BookDisplay searchData={searchData} /> : <EmptyList />}
    </>
  );
}

export default App;
