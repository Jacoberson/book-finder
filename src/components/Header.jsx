import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  return (
    <>
      <header>
        <h1 id="title">Book Finder</h1>
        <div className="search">
          <div className="search-box">
            <label>
              <input
                value={search}
                onChange={handleSearchChange}
                id="search"
                type="search"
                placeholder="Search for a book..."
              />
            </label>
          </div>
          <div className="search-button">
            <button id="search-button" type="button">
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
