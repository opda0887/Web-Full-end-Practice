import React, { useState, useEffect } from "react";
import { Search, Pictures } from "../components";
import { v4 as uuidv4 } from "uuid";

const Homepage = () => {
  const [input, setInput] = useState(""); // click search button will change currentSearch from input
  const [currentSearch, setCurrentSearch] = useState("");
  const [dataImg, setDataImg] = useState(null);
  const [page, setPage] = useState(1);
  // * pexels api key
  const auth = "HviLdpdTUZrvRnc7NuoOjRCThPHKqF5Cy3bjLGXXvajZvlV8X31UONaT";
  const dailyImgURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchImgURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=1&per_page=15`;

  // ? fetch data from pexels api
  const searchImg = async (url) => {
    setPage(2); // from the 2nd page
    const dataImgs = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataImgs.json();
    setDataImg(parsedData.photos);
    return true;
  };

  // ? load more imgs
  const moreImgs = async () => {
    let newURL;
    if (currentSearch === "")
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    else
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&page=${page}&per_page=15`;
    setPage(page + 1); // going for the next page
    const dataImgs = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parsedData = await dataImgs.json();
    setDataImg(dataImg.concat(parsedData.photos));
  };

  // ? fetch data when the page loads up
  useEffect(() => {
    searchImg(dailyImgURL);
  }, []);

  // ? use currentSearch to search imgs
  useEffect(() => {
    if (currentSearch === "") searchImg(dailyImgURL);
    else searchImg(searchImgURL);
  }, [currentSearch]);

  return (
    <div className="igsch__mainpage-container">
      <Search searchImg={() => setCurrentSearch(input)} setInput={setInput} />
      <div className="igsch__mainpage-container_pictures">
        {dataImg &&
          dataImg.map((d) => {
            return <Pictures data={d} key={uuidv4()} />;
          })}
      </div>
      <div className="igsch__mainpage-container_loadMore">
        <button onClick={moreImgs}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;
