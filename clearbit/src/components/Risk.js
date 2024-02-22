import React, {useEffect} from "react";
import { useState } from "react";
import "./css/risk.css";
import useFetch from "../customHook/useFetch";
import RiskCalculator from "./RiskCalculator";

const Risk = () =>{
    const [ip, setIP] = useState("");
  const [email, setEmail] = useState("");
  
  const [message, setMessage] = useState("");
  const [fetchObj, setFetchObj] = useState(null);
  

  const { data, res_status } = useFetch(fetchObj);
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "https://risk.clearbit.com/v1/calculate";

        const headerParameters = {
            "Content-Type": "application/json",
            "Authorization": "Bearer sk_fa7578b5f93edf2f55ee0ec480963703"
        };

        const bodyParameters = JSON.stringify({
            ip: ip,
          email: email
        });

        const options = {
            method: 'POST',
            headers: headerParameters,
            body: bodyParameters
        };

        const fetchObj = {
            'url':url,
            'options': options
        }
        const fetchObjStr = JSON.stringify(fetchObj);
        setFetchObj(fetchObjStr);
    } catch (err) {
      console.log(err);
    }
  };

    useEffect(() => {
        if (res_status) {
            if (res_status !== 200) {
               
                setMessage("Some error occured, wrong email or IP!");
              }
            }
        
      }, [data, res_status]);
      
  return (
    <>
    {data !== null && <>{res_status===200 && <RiskCalculator data={data} />}</>}
    { data === null && <>
    <div className="container5">
        <h2 className="risk_head">The Risk Calculator</h2>
      <form className="feilds" onSubmit={handleSubmit}>
      <span >Email Address:</span><br></br>
        <input
          type="email"
          value={email}
          placeholder="example@xyz"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <span >IP Address:</span><br></br>
        <input
          type="text"
          value={ip}
          placeholder="e.g. 127.0.0.1"
          onChange={(e) => setIP(e.target.value)}
        />
        <br></br>
        <br></br>
        <button className="view" type="submit">View Results</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
    </>}
    </>
  );
}

export default Risk;
