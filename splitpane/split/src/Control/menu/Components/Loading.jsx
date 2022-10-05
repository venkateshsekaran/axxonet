import React from "react";
import "./Loading.css";

let Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12   center">
          <div class="ring ">
            Loading
            <span className="span"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
