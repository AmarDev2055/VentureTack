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
      <div className="report">
        <div className="list">
          <button
            class="btn btn-light mb-2 dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            १०
          </button>
          ओटा मात्र देखाऊनुस
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">क्र.स.</th>
              <th scope="col">स्थानीय तहको नाम</th>
              <th scope="col">जिल्ला</th>
              <th scope="col">स्थानीय तहको प्रकारहरू</th>
              <th scope="col">प्रदेश</th>
              <th scope="col">वेबसाइट</th>
              <th scope="col">कैफियत</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>आठराई आठराई गाउँपालिका</td>
              <td>ताप्लेजुङ</td>
              <td>गाउँपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
