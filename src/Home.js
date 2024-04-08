import React from "react";
import NavBar from "./components/Nav";
import "./Home.css"

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <section
          className="top-section"
          // style={{
          //   backgroundImage: `url(${background})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          {/* <img src="./background.png" className="bg-image"/> */}
          <h1 style={{ color: "white" }}>RCJ Tech Solutions</h1>
        </section>

        <section>
          <div
            style={{
              backgroundColor: "#A391CD",
              padding: "20px",
              height: "240px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="title-span">
              <span>Your Cogito Project Management</span>
            </div>
            <div style={{ display: "flex", width: "72%" }}>
              <span className="text-body">
                Our project managers possess extensive expertise in Epic
                analytics and report processes. They leverage their technical
                know-how and workflow experience to proactively address risks
                before escalation, accurately assess -specific timelines, and
                adeptly collaborate with the subject matter experts, end users,
                and analysts alike.
              </span>
            </div>
          </div>
        </section>


      </header>
    </div>
  );
};

export default Home;
