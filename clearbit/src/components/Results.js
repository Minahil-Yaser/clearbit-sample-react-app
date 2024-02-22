import React from "react";
import useFetch from "../customHook/useFetch";
import Person from "./Person";
import Company from "./Company";
import { useLocation } from "react-router-dom";
import "./css/loader.css";
import "./css/enrichment.css";


const Results = () => {
  const query = new URLSearchParams(useLocation().search);
  const type = query.get("type");
  const search = query.get("query");

  let url = "";
  let query_params = {};
  let headers = {};
  let options = {};
  let queryParamsStr = "";

 
  if (type === "person") {
    query_params = {
      email: search,
    };
    queryParamsStr = new URLSearchParams(query_params);
    url = `https://person.clearbit.com/v2/people/find?${queryParamsStr}`;
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer sk_fa7578b5f93edf2f55ee0ec480963703",
    };
    options = {
      method: "GET",
      headers: headers,
    };
  } else if (type === "company") {
    query_params = {
      domain: search,
    };
    queryParamsStr = new URLSearchParams(query_params);
    url = `https://company.clearbit.com/v2/companies/find?${queryParamsStr}`;

    queryParamsStr = JSON.stringify(query_params);
  
    headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer sk_fa7578b5f93edf2f55ee0ec480963703",
    };

    options = {
      method: "GET",
      headers: headers,
    };
  }
  const fetchObj = {
    url: url,
    options: options,
  };
  const fetchObjStr = JSON.stringify(fetchObj);
  const { data, res_status } = useFetch(fetchObjStr);
  console.log("Data", data);
  console.log("Status", res_status);
  //if (data && res_status !== 200) {
  //  return <Navigate replace to="/enrichment" />;
  //} else {
  if (res_status === 200) {
    if (data !== null) {
      return (
        <>
          {type === "person" && <Person data={data} />}
          {type === "company" && <Company data={data} />}
        </>
      );
    } else {
      return (
        <>
          <div className="loadscreen">
            {" "}
            <div className="loader"></div>
          </div>
        </>
      );
    }
  } else {
    if (res_status === 0) {
      return (
        <>
          <div className="loadscreen">
            {" "}
            <div className="loader"></div>
          </div>
        </>
      );
    } else {
      return <>  <div className="container2" ><h2 style={{textAlign:"center", color:"#20a7db", padding:"100px"}}>No data found against the entered value, please try entering a different value</h2></div></>;
    }
  }
};

export default Results;
