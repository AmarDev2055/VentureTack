import React from "react";
import "../../css/report.css";
const Report = () => {
  return (
    <div className="reportContainer">
      <div className="documents">दसताबेजहरु</div>
      <div className="miniNav d-flex justify-content-around">
        <button
          class="btn btn-light mb-2 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          प्रदेश
        </button>
        <button
          class="btn btn-light mb-2 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          जिल्ला
        </button>
        <button
          class="btn btn-light mb-2 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          स्थान
        </button>
        <button
          class="btn btn-light mb-2 dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          वडा
        </button>
        <form className="mb-2 " role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="सर्च"
            aria-label="Search"
          />
        </form>
      </div>
      <div className="report">Report</div>
    </div>
  );
};

export default Report;
