import React from "react";

const Pictures = ({ data }) => {
  return (
    <div className="img-container">
      <p className="photographer">{data.photographer}</p>
      <div className="img-container_box">
        <img src={data.src.large} alt="a image" />
      </div>
      <p>
        Download Image:{" "}
        <a className="click_here" target="_blank" href={data.src.large}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Pictures;
