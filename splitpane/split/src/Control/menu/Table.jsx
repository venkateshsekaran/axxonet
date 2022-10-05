import React from "react";
import SplitPane from "react-split-pane";
import Controlvertical from "../Controlvertical";
import ControlVertical1 from "../ControlVertical1";

let Table = ({ data }) => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col  d-flex justify-content-center mr-5 ">
            <table className="table table-hover ">
              <thead className="bg-dark text-white">
                <tr>
                  <th>S.no</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody className="text-white bg-secondary">
                <tr>
                  <td>1</td>
                  <td>venkat</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>raj</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 ml-5 mr-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ab.
        Repellat magnam quasi quisquam, atque ab vitae dignissimos quaerat
        maiores ratione ut nam, dicta exercitationem cum quia similique. Dolor,
        rerum?
      </div>
    </div>
  );
};
export default Table;
