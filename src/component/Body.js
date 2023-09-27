import React from "react";
import Restaurant from "./Restaurant";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div>
      <div className="filter">
        <button className="filter-btn" onClick={() => console.log("Click")}>
          Filter
        </button>
      </div>
      <div className="restur">
        <div className="container">
          <div className="row">
            {resList.map((items) => {
              return (
                <div className="col-md-3">
                  <Restaurant key={items.data.id} {...items.data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
