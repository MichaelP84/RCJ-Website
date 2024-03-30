import React from "react";
import NavBar from "./components/Nav";

const Home = () => {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <section
          className="top-section"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
            <div style={{ display: "flex", width: "75%" }}>
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
          <div>
            <h1 className="part" style={{ color: "#222250" }}>
              Our Services
            </h1>
          </div>
          <br />
          <div className="part" style={{ backgroundColor: "#8B74B7" }}>
            <div className="title-span">
              <span>
                Epic Cogito (Clarity/Caboodle) Installations, support, and
                upgrades
              </span>
            </div>
            <div className="bullet-list-div">
              <span className="list-item">Clarity Upgrades</span>
              <span className="list-item">Caboodle Upgrades</span>
              <span className="list-item">Cogito Caboodle upgrades</span>
              <span className="list-item">
                SplicerDicer infrastructure upgrades.
              </span>
              <span className="list-item">
                Business objects software in a clustered environment
              </span>
              <span className="list-item">Tableau enterprise Upgrades</span>
            </div>
          </div>
          <br />
          <div className="part" style={{ backgroundColor: "#7A5FA6" }}>
            <div className="title-span">
              <span>Epic Cogito Solution architecture</span>
            </div>
            <div className="bullet-list-div">
              <span className="list-item">
                Provide end to end solution architecture for Epic analytics.
              </span>
              <span className="list-item">
                We provide recommendations to the right analytical solutions for
                your needs that can be sustained in the long run with minimum
                resource and low cost.
              </span>
              <span className="list-item">
                Leveraging Epic out of box solutions to keep the cost to minimum
              </span>
              <span className="list-item">
                Implement best practices for data warehousing and ETL processes
                in a healthcare setting
              </span>
            </div>
          </div>
          <br />
          <div className="part">
            <div className="title-span">
              <span>Cogito Reporting tools expertise</span>
            </div>
            <div className="bullet-list-div">
              <span className="list-item"> Cogito Radar Dashboards</span>
              <span className="list-item">
                Cogito Reporting Work Bench reports
              </span>
              <span className="list-item">SlicerDicer dashboards</span>
              <span className="list-item">Cogito RWB -SQL reports</span>
              <span className="list-item">Reporting Backlog queue support</span>
              <span className="list-item">Radar Dashboard support</span>
            </div>
          </div>
          <br />
          <div className="part">
            <div className="title-span">
              <span>Tableau Development</span>
            </div>
            <div>
              <span>
                We use tools such as Tableau and/or Power BI to generate
                visually engaging and actionable reports for stakeholders. We
                also work in conjunction with end-users and business analysts to
                grasp requirements and provide solutions aligned with the
                organizations strategic objectives.
              </span>
            </div>
          </div>
          <br />
          <div className="part">
            <div className="title-span">
              <span>Third Party Data integration</span>
            </div>
            <div className="bullet-list-div">
              <span className="list-item">
                Caboodle third part data integration
              </span>
              <span className="list-item">ETL development support for EDW</span>
              <span className="list-item">Kronos data</span>
              <span className="list-item">Patient Satisfaction</span>
              <span className="list-item">Claims</span>
              <span className="list-item">Peoplesoft ERP -GL</span>
              <span className="list-item">Larson</span>
            </div>
          </div>
          <br />
          <div className="part">
            <div className="title-span">
              <span>Cogito application Expertise</span>
            </div>
            <div className="bullet-list-div">
              <span className="list-item">Revenue Cycle</span>
              <span className="list-item">Hospital Billing</span>
              <span className="list-item">Professional Billing</span>
              <span className="list-item">
                Strata DSS /EPSi implementations
              </span>
              <span className="list-item">Vizient</span>
              <span className="list-item">Clinical and quality Reports</span>
              <span className="list-item">HEDIS</span>
              <span className="list-item">UDS</span>
              <span className="list-item">CMS audit support</span>
              <span className="list-item">Inpatient Core Measures Metrics</span>
              <span className="list-item">Medication reconciliation</span>
              <span className="list-item">Referrals</span>
              <span className="list-item">Medication administration</span>
              <span className="list-item">
                Clinical Restraints used by Nursing Quality team
              </span>
              <span className="list-item">
                Ambulatory (transfer center, access, registration and scheduling
                and outpatient Clinical reports)
              </span>
              <span className="list-item">
                Inpatient(OR, hospital at home, Emergency)
              </span>
              <span className="list-item">Pharmacy Medication Metrics</span>
              <span className="list-item">Beaker</span>
              <span className="list-item">
                Chief executive dashboards and metrics
              </span>
              <span className="list-item">Physician Productivity</span>
              <span className="list-item">Compliance and Regulatory</span>
              <span className="list-item">Population Health</span>
            </div>
          </div>
        </section>

        <section>
          <p>Contact us:</p>
          <p>Email: Paul.Pasala@rcjtechsolutions.om</p>
          <p>Phone: 713-822-4327</p>
        </section>
      </header>
    </div>
  );
};

export default Home;
