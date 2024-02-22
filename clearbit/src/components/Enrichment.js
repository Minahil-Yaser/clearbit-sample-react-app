import { React, useState } from "react";
import "./css/enrichment.css";

const Enrichment = () => {
  const [value, setValue] = useState("person");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="container2">
        <h2
          style={{ textAlign: "center", color: "#1c91c0", paddingTop: "80px" }}
        >
          The Enrichment Tool
        </h2>
        <ul
          className="nav navbar-nav navbar-right"
          style={{ marginLeft: "100px", marginTop: "80px" }}
        >
          <form
            action="/results"
            method="get"
            className="form-inline my-2 my-lg-0"
            style={{ paddingRight: "10px", paddingTop: "8px" }}
          >
            <select
              id="opt"
              onChange={handleChange}
              defaultValue={value}
              className="form-select mr-sm-2"
              name="type"
              style={{
                paddingLeft: "5px",
                backgroundColor: "#20a7db",
                borderColor: "#20a7db",
                color: "white",
                borderRadius: "5px",
                width: "100px",
                height: "33px",
              }}
            >
              <option value="person">Person</option>
              <option value="company">Company</option>
            </select>

            {value === "person" && (
              <input
                className="form-control mr-sm-2"
                name="query"
                pattern="[a-z0-9._%+-]+[@]?[a-z0-9.-]+\.[a-z]{2,}$"
                style={{ width: "550px" }}
                type="email"
                placeholder="Enter person's email..."
                aria-label="Search"
              />
            )}
            {value === "company" && (
              <input
                className="form-control mr-sm-2"
                name="query"
                pattern="[a-z0-9.-]+\.[a-z]{2,}$"
                style={{ width: "550px" }}
                type="search"
                placeholder="Enter company's domain..."
                aria-label="Search"
              />
            )}

            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
              style={{
                marginLeft: "-1px",
                width: "90px",
                backgroundColor: "#20a7db",
                borderColor: "#20a7db",
              }}
            >
              <i
                className="fa fa-search"
                style={{ fontSize: "18px", color: "#ffffff" }}
              ></i>
            </button>
          </form>
        </ul>
      </div>
    </>
  );
};

export default Enrichment;
