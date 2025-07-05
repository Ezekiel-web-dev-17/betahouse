import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutpage.css";
import about from "../../utils/b-11.jpg (1).svg";
import about_1 from "../../utils/b-11.jpg (2).svg";
import about_2 from "../../utils/b-11.jpg (3).svg";
import about_3 from "../../utils/b-11.jpg (4).svg";
import about_4 from "../../utils/b-11.jpg (5).svg";
import about_5 from "../../utils/b-11.jpg (6).svg";
import about_6 from "../../utils/b-11.jpg (7).svg";
import about_7 from "../../utils/b-11.jpg (8).svg";

const AboutUs = () => {
  return (
    <section className="about-us py-5 bg-white mt-sm-5 pt-sm-5">
      <div className="container mt-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold ">About Us</h2>
          <div className="d-sm-flex flex-sm-row-reverse align-items-sm-center">
            <p className="lead text-secondary px-4">
              Welcome to <strong>Beta House</strong> – where clients and agents
              meet to buy, sell, or rent houses across Nigeria. Connect with
              trusted agents and real homeowners across Nigeria — all in one
              place.Search thousands of verified properties from Lagos to Abuja,
              from self-cons to duplexes — we’ve got your “beta house” right
              here.100% Nigerian. 100% Trusted. Serving home seekers and agents
              nationwide.
            </p>

            <img src={about} width="80%" alt="" />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className=" d-sm-grid g-sm-5 row-cols-sm-10">
            {/* Who We Are */}
            <div className="mb-5">
              <h3 className="fw-bold">Who We Are</h3>
              <div className="d-sm-flex flex-sm-row-reverse align-items-sm-center">
                <p className="text-muted px-4">
                  Beta House is Nigeria’s homegrown real estate platform. We
                  connect buyers, sellers, renters, and professional agents in
                  one trusted digital space. Whether you’re hunting for your
                  dream home or listing your property, we’re your reliable
                  partner.
                </p>
                <img src={about_1} width="80%" alt="" />
              </div>
            </div>

            {/* What We Do */}
            <div className="mb-5">
              <h3 className="fw-bold"> What We Do</h3>
              <div className="d-sm-flex flex-sm-row-reverse align-items-sm-center gap-sm-5">
                <div>
                  <ul className="text-muted px-4">
                    <li>
                      <strong>Buyers:</strong> Discover verified houses, flats,
                      and apartments from Lagos to Enugu.
                    </li>
                    <li>
                      <strong>Sellers:</strong> List your properties and reach
                      real buyers and renters.
                    </li>
                    <li>
                      <strong>Renters:</strong> Find a place that fits your
                      lifestyle and budget.
                    </li>
                    <li>
                      <strong>Agents:</strong> Get discovered, manage listings,
                      and close deals faster.
                    </li>
                  </ul>
                  <p className="text-muted px-4">
                    Every listing on Beta House is verified to cut out scams and
                    connect people with real, quality options.
                  </p>
                </div>
                <img src={about_3} width="80%" alt="" />
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-5">
              <h3 className="fw-bold"> Why Choose Us</h3>
              <div className="d-sm-flex flex-sm-row-reverse align-items-sm-center gap-sm-5">
                <ul className="text-muted px-4">
                  <li>
                    <strong>Trust & Transparency:</strong> We verify agents and
                    listings—no funny business.
                  </li>
                  <li>
                    <strong>Nationwide Reach:</strong> We serve clients across
                    Nigeria, not just in big cities.
                  </li>
                  <li>
                    <strong>Built for You:</strong> We blend tech with the way
                    Nigerians prefer to do business—personal and respectful.
                  </li>
                  <li>
                    <strong>Support that Listens:</strong> Our team is always
                    one click or call away.
                  </li>
                </ul>
                <img src={about_2} width="80%" alt="" />
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-5">
              <h3 className="fw-bold"> Our Vision</h3>
              <div className="d-sm-flex flex-sm-row-reverse align-items-sm-center">
                <p className="text-muted px-4">
                  To become Nigeria’s most trusted online housing platform — the
                  first name that comes to mind when it’s time to move.
                </p>
                <img src={about_4} width="80%" alt="" />
              </div>
            </div>

            {/* Where We're Going */}
            <div>
              <h3 className="fw-bold"> Where We're Going</h3>
              <p className="text-muted px-4">
                We're building more than a website — we're creating a movement.
                One where landlords, tenants, and agents do business with ease,
                integrity, and mutual respect. As Beta House grows, you’ll see
                more features, smarter tools, and better experiences.
              </p>
              <p className="text-muted fst-italic">
                Ready to find your next home or sell with confidence? <br />
                Welcome to Beta House — where better homes begin.
              </p>
              <div
                className=" d-flex gap-2 position-relative"
                style={{ right: "-10%" }}
              >
                <img src={about_5} width="15%" className="min-img" alt="" />
                <img src={about_6} width="45%" alt="" />
                <img src={about_7} width="30%" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
