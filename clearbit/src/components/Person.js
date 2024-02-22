import React from "react";
import "./css/person.css";

const Person = ({ data }) => {
  return (
    <>
      <div>
        <div className="container3">
          <div className="row">
            <div className="column">
              <img
                className="avatar"
                src={data.avatar}
                alt="No preview"
                width={300}
                height={300}
              ></img>
            </div>
            <div className="column2">
              <h1 className="name_heading">
                {data.name.fullName ? data.name.fullName : "No data found"}
              </h1>
              <br></br>
              <h5 className="bio">
                Bio: {data.bio ? data.bio : "No data found"}
              </h5>
              <h5 className="bio">
                Email: {data.email ? data.email : "No data found"}
              </h5>
              <h5 className="bio">
                Location: {data.location ? data.location : "No data found"}
              </h5>
              <br></br>
            </div>
          </div>
          <h3 className="text_top">Social:</h3>
          <br></br>
          <h5 className="text_normal">
            Facebook Handle:{" "}
            {data.facebook.handle ? data.facebook.handle : "No data found"}
          </h5>
          <h5 className="text_normal">
            GitHub Handle:{" "}
            {data.github.handle ? data.github.handle : "No data found"}
          </h5>
          <h5 className="text_normal">
            Twitter Handle:{" "}
            {data.twitter.handle ? data.twitter.handle : "No data found"}
          </h5>
          <h5 className="text_normal">
            Twitter ID: {data.twitter.id ? data.twitter.id : "No data found"}
          </h5>
          <h5 className="text_normal">
            LinkedIn Handle:{" "}
            {data.linkedin.handle ? data.linkedin.handle : "No data found"}
          </h5>
          <h5 className="text_normal">
            Google+ Handle:{" "}
            {data.googleplus.handle ? data.googleplus.handle : "No data found"}
          </h5>

          <h5 className="text_normal">
            Gravatar Handle:{" "}
            {data.gravatar.handle ? data.gravatar.handle : "No data found"}
          </h5>

          <h3 className="text_top">Location on map:</h3>
          <br></br>
          <iframe
            title="YT"
            src={
              "https://maps.google.com/maps?q=" +
              data.geo.lat +
              "," +
              data.geo.lng +
              "+&hl=en;z=14&amp&output=embed"
            }
            width={700}
            height={400}
            style={{ marginLeft: "130px" }}
          ></iframe>
          <br></br>
          <br></br>
        </div>
        <br></br>
      </div>
    </>
  );
};

export default Person;
