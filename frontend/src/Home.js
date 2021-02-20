import React from "react";
import { Link } from "react-scroll";
import "./Home.css";
import Typewriter from "typewriter-effect";
function Home() {
  return (
    <div id="homescreen" className=" contaner-fluid ">
      <img src="/images/landimg.jpg" alt="landing image" />
      <div id='particle'></div>
      <div className="landtext">
        <h1>
          Hi i'm <span className="text-danger">Bishal Roy</span>.
        </h1>
        {/* <h2>I'm Full-stack Web developer.</h2> */}
        <div className="typewrite">
          <Typewriter
            onInit={(typewriter) => {
              for (let i = 0; i < 10; i++) {
                if (i <= 8) {
                  typewriter
                    .typeString("I'm Full-stack Web developer.")
                    .pauseFor(2500)
                    .deleteAll()
                    .start();
                } else {
                  typewriter
                    .typeString("I'm Full-stack Web developer.")
                    .pauseFor(2500)
                    .start()
                    .stop();
                }
              }
            }}
          />
        </div>

        <button type="button" className="btn btn-outline-info">
          <Link to="aboutscreen" smooth={true} duration="1000">
            View my Work
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
