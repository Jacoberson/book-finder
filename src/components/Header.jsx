import getBooks from "../api.js";

const Header = ({ searchInput, setSearchInput, searchData, setSearchData }) => {
  const handleSearchChange = event => {
    setSearchInput(event.target.value);
  };

  const handleSearch = async () => {
    const response = await getBooks(searchInput);
    setSearchData(response.items);
    console.log(searchData);
  };

  return (
    <>
      <header>
        <h1 id="title">Book Finder</h1>
        <div className="search">
          <div className="search-box">
            <label>
              <input
                value={searchInput}
                onChange={handleSearchChange}
                id="search"
                type="search"
                placeholder="Search for a book..."
              />
            </label>
          </div>
          <div className="search-button">
            <button onClick={handleSearch} id="search-button" type="button">
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
