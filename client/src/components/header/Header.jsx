import minus from "../../utils/span.bedroom-count-btn.svg";
import plus from "../../utils/span.bedroom-count-btn (1).svg";
import line from "../../utils/Line 7.svg";

const Header = () => {
  return (
    <header className=" d-flex flex-column align-items-center justify-content-center gap-5">
      <h1 className="display-5 fw-semibold text-white mb-0">
        Find Your Next Home With Ease.
      </h1>
      <p className="find-txt mb-0">
        <strong>Buy and Rent Properties.</strong> Connect with trusted agents
        and real homeowners across Nigeria — all in one place.
      </p>
      <section className="hero rounded-3 ps-sm-5 px-3 px-sm-0 m-3">
        <div>
          <h6>LOCATION</h6>
          <p className="mb-0">eg. Gbagada</p>
        </div>
        <img src={line} alt="" />
        <div>
          <h6 className=" text-center">PROPERTY TYPE</h6>
          <p className="mb-0">eg. Duplex, Bedroom Flat</p>
        </div>
        <img src={line} alt="" />
        <div>
          <h6 className=" text-center">BEDROOM</h6>
          <div className="bedroom-ctrl align-items-center">
            <img src={minus} alt="" />
            <p className=" mb-0">0</p>
            <img src={plus} alt="" />
          </div>
        </div>
        <button className="border-0 find-prop text-white">Find Property</button>
      </section>
    </header>
  );
};

export default Header;
