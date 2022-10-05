import React from "react";
import "./Controlvertical.css";
import { Link } from "react-router-dom";

let Controlvertical = () => {
  return (
    <div>
      <div className="container   ">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover ">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>label</td>
                  <td>string</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>minSize</td>
                  <td>100</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>maxSize</td>
                  <td>200</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="search">Search Component</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controlvertical;
