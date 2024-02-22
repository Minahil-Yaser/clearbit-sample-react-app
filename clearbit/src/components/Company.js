import React from "react";
import "./css/company.css";

const Company = ({ data }) => {
  return (
    <>
      <div>
        <div className="container4">
          <div className="row">
            <div className="column">
              <img
                className="logo"
                src={data.logo}
                alt="No preview"
                width={200}
                height={200}
              ></img>
            </div>
            <div className="column2">
              <h1 className="comp_name">
                {data.name ? data.name : "No data found"}
              </h1>
              <h6 className="tags">
                {data.tags ? data.tags : "No data found"}
              </h6>

              <br></br>
              <br></br>
              <h6 className="description">
                {data.description ? data.description : "No data found"}
              </h6>

              <br></br>
              <h5 className="description">
                Year established in:{" "}
                {data.foundedYear ? data.foundedYear : "No data found"}
              </h5>
              <h5 className="description">
                Legal name: {data.legalName ? data.legalName : "No data found"}
              </h5>
              <h5 className="description">
                Ticker: {data.ticker ? data.ticker : "No data found"}
              </h5>

              <h5 className="description">
                Phone: {data.phone ? data.phone : "No data found"}
              </h5>
            </div>
          </div>

          <h3 className="head2">Company Metrics:</h3>
          <br></br>
          <h5 className="metrics">
            Alexa US rank:{" "}
            {data.metrics.alexaUsRank
              ? data.metrics.alexaUsRank
              : "No data found"}
          </h5>
          <h5 className="metrics">
            Alexa global rank:{" "}
            {data.metrics.alexaGlobalRank
              ? data.metrics.alexaGlobalRank
              : "No data found"}
          </h5>
          <h5 className="metrics">
            Number of Employees:{" "}
            {data.metrics.employees ? data.metrics.employees : "No data found"}
          </h5>
          <h5 className="metrics">
            Annual revenue:{" "}
            {data.metrics.annualRevenue
              ? data.metrics.annualRevenue
              : "No data found"}
          </h5>
          <h5 className="metrics">
            Estimated annual revenue:{" "}
            {data.metrics.estimatedAnnualRevenue
              ? data.metrics.estimatedAnnualRevenue
              : "No data found"}
          </h5>

          <h3 className="head2">Categorical Details:</h3>
          <br></br>

          <h5 className="metrics">
            Sector:{" "}
            {data.category.sector ? data.category.sector : "No data found"}
          </h5>
          <h5 className="metrics">
            Industry Group:{" "}
            {data.category.industryGroup
              ? data.category.industryGroup
              : "No data found"}
          </h5>
          <h5 className="metrics">
            Industry:{" "}
            {data.category.industry ? data.category.industry : "No data found"}
          </h5>
          <h5 className="metrics">
            Sub-Industry:{" "}
            {data.category.subIndustry
              ? data.category.subIndustry
              : "No data found"}
          </h5>
          <h5 className="metrics">
            SIC Code:{" "}
            {data.category.sicCode ? data.category.sicCode : "No data found"}
          </h5>
          <h5 className="metrics">
            NAICS Code:{" "}
            {data.category.naicsCode
              ? data.category.naicsCode
              : "No data found"}
          </h5>

          <h3 className="head2">Other Details:</h3>
          <br></br>
          <h5 className="metrics">
            Domain: {data.domain ? data.domain : "No data found"}
          </h5>
          <h5 className="metrics">
            Other domains:{" "}
            {data.domainAliases ? data.domainAliases : "No data found"}
          </h5>

          <h3 className="head2">Location:</h3>
          <br></br>
          <h5 className="metrics">{data.location}</h5>
          <br></br>
          <iframe
            title="YT2"
            className="metrics"
            src={
              "https://maps.google.com/maps?q=" +
              data.geo.lat +
              "," +
              data.geo.lng +
              "+&hl=en;z=14&amp&output=embed"
            }
            width="700"
            height="400"
          ></iframe>
          <br></br>
          <br></br>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Company;
