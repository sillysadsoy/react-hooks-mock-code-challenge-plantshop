import React from "react";

function Search({ query, handleQuery }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={(e) => handleQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
