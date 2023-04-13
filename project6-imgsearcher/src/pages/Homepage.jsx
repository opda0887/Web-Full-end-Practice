import React from "react";
import { Search } from "../components";

const Homepage = () => {
  // ! pexels api key
  const auth = "HviLdpdTUZrvRnc7NuoOjRCThPHKqF5Cy3bjLGXXvajZvlV8X31UONaT";

  return (
    <div className="igsch__homepage-container">
      <Search />
    </div>
  );
};

export default Homepage;
