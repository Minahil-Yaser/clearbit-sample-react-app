import React from "react";
import "./css/riskCalculator.css";

const RiskCalculator = ({ data }) => {
  console.log("RC", data);
  return (
    <>
      {data.error && (
        <>
          <div className="error">
            <span style={{ fontSize: "larger" }}>Error Type: {data.error}</span>
            <br></br>
            <br></br>
            {data.error.description && (
              <>
                <span style={{ fontSize: "larger" }}>
                  Description: {data.error.description}
                </span>
                <br></br>
                <br></br>
              </>
            )}
            {data.error.messages && (
              <>
                <span style={{ fontSize: "larger" }}>
                  Description: {data.error.messages}
                </span>
                <br></br>
                <br></br>
              </>
            )}
          </div>
        </>
      )}
      {data.risk && (
        <>
          <div className="container6">
            {" "}
            <div style={{ paddingTop: "70px", paddingLeft: "150px" }}>
              <h2>Results</h2><br></br>
              {data.email.valid === true && <><span style={{fontSize: "larger"}}>Email Address: <span style={{color:"green"}}>Valid</span></span><br></br><br></br></>}
              {data.email.valid !== true && <><span style={{fontSize: "larger"}}>Email Address: <span style={{color:"red"}}>Invalid</span></span><br></br><br></br></>}

              {data.ip.blacklisted === false && <><span style={{fontSize: "larger"}}>IP Address: <span style={{color:"green"}}>Not Blacklisted</span></span><br></br><br></br></>}
              {data.ip.blacklisted !== false && <><span style={{fontSize: "larger"}}>IP Address: <span style={{color:"red"}}>Blacklisted</span></span><br></br><br></br></>}

              {data.risk.level === "low" && <> <span style={{fontSize: "larger"}}>Risk Level: <span style={{color:"green"}}>Low</span></span><br></br><br></br></>}
              {data.risk.level === "high" && <> <span style={{fontSize: "larger"}}>Risk Level: <span style={{color:"red"}}>High</span></span><br></br><br></br></>}

              <span style={{fontSize: "larger"}}>Overall Risk Score: {data.risk.score}</span><br></br><br></br>

              <span style={{fontSize: "larger",  fontWeight: "bold"}}> Reasons for the risk:</span><br></br>

              {data.risk.reasons && <>{data['risk']['reasons'].map((res, index01) => {
                  return (
                    <>
                    <span key={index01} style={{fontSize: "medium"}}>• {res}</span><br></br>
                    </>
                  );
                })}</>}
                {data.risk.reasons.length === 0 && <span>No reasons found!</span>}

            </div>
          </div>
          <br></br>
        </>
      )}
    </>
  );
};

export default RiskCalculator;
