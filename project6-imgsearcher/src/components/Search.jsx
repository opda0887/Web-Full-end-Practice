import React from "react";

const Search = ({ searchImg, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  // ? in input text: enter "Enter" will click the search button
  const handleEnterClick = (e) => {
    if (e.key === "Enter") {
      document.querySelector("#search").click();
    }
  };

  return (
    <div className="igsch__mainpage-container_search-bar">
      <input
        type="text"
        onChange={inputHandler}
        onKeyDown={handleEnterClick}
        placeholder="type imgs you look for"
      />
      <button id="search" onClick={searchImg}>
        Search
      </button>
    </div>
  );
};

export default Search;
