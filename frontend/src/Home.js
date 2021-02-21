import React from "react";
import { Link } from "react-scroll";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Particles from "react-particles-js";

function Home() {
  return (
    <div id="homescreen" className=" contaner-fluid ">
      <img src="/images/landimg.jpg" alt="landing image" />
      {/* <div id='particle'></div> */}
      <Particles
        id="particle"
        params={{
          particles: {
            number: {
              value: 200,
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "#000",
              },
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 10,
              },
            },
            size: {
              value: 5,
              random: true,
              anim: {
                enable: true,
                speed: 30,
              },
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#fff",
              width: 1,
            },
            move: {
              enable: true,
              speed: 5,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                distance: 10,
                size: 1,
              },
            },
          },
        }}
      />
      <div className="landtext">
        <h1>
          Hi i'm <span className="text-danger">Bishal Roy</span>.
        </h1>
        <div className="typewrite">
          <Typewriter
            options={{
              strings: ["I'm Full-stack Web developer."],
              autoStart: true,
              loop: true,
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
