import React from "react";
import "./About.css";
import SpeedTwoToneIcon from "@material-ui/icons/SpeedTwoTone";
import DevicesTwoToneIcon from "@material-ui/icons/DevicesTwoTone";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import Persantage from "./components/Persantage";

function About() {
  return (
    <>
      <div className="about container-fluid" id="aboutscreen" >
        <div className="designmain">
          <div className="design">
            <img src="/images/imgone.jpg" alt="my image" />
            <div id="rotateborder"></div>
            <div className="grid">
              <div className="data-white"></div>
              <div></div>
              <div></div>
              <div className="data-white"></div>
            </div>
            <div className="blend">
              <img src="/images/imgone.jpg" alt="my image" />
              <div className="grid">
                <div></div>
                <div className="data-white"></div>
                <div className="data-white"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text">
          <h2>Who's this guy?</h2>
          <br />
          <p>
            I'm a Full-Stack Web Developer Lives in Bangladesh. I have serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences.I help designers, small agencies and businesses
            bring their ideas to life. Let's make something special.
          </p>
        </div>
      </div>
      <div className="skill container-fluid ">
        <div className="sk">
          <h1>SKILLS</h1>
        </div>
        {/* <div class="container">
          <div class="row row-cols-2">
            <div class="col">
              <div className="body">
                <SpeedTwoToneIcon className="icon" />
                <div className="details">
                  <h2>Fast</h2>
                  <p>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="body">
                <DevicesTwoToneIcon className="icon" />
                <div className="details">
                  <h2>Responsive</h2>
                  <p>My layouts will work on any device, big or small.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="body">
                <Brightness7Icon className="icon" />
                <div className="details">
                  <h2>Intuitive</h2>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
              </div>
            </div>
            <div class="col">
              <div className="body">
                <DynamicFeedIcon className="icon" />
                <div className="details">
                  <h2>Dynamic</h2>
                  <p>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="strongpoint">
          <div className="body">
            <SpeedTwoToneIcon className="icon" />
            <div className="details">
              <h2>Fast</h2>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </div>
          </div>
          <div className="body">
            <DevicesTwoToneIcon className="icon" />
            <div className="details">
              <h2>Responsive</h2>
              <p>My layouts will work on any device, big or small.</p>
            </div>
          </div>
        </div>
        <div className="strongpoint">
          <div className="body">
            <Brightness7Icon className="icon" />
            <div className="details">
              <h2>Intuitive</h2>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </div>
          </div>
          <div className="body">
            <DynamicFeedIcon className="icon" />
            <div className="details">
              <h2>Dynamic</h2>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div> */}

        <div className="container">
          <div className="row my-5 mx-2 ">
            <div className="col-sm ">
              <div className="body m-auto">
                <SpeedTwoToneIcon className="icon" />
                <div className="details">
                  <h2>Fast</h2>
                  <p>
                    Fast load times and lag free interaction, my highest
                    priority.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="body m-auto">
                <DevicesTwoToneIcon className="icon" />
                <div className="details">
                  <h2>Responsive</h2>
                  <p>My layouts will work on any device, big or small.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mx-2">
            <div className="col-sm">
              <div className="body m-auto">
                <Brightness7Icon className="icon" />
                <div className="details">
                  <h2>Intuitive</h2>
                  <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="body m-auto">
                <DynamicFeedIcon className="icon" />
                <div className="details">
                  <h2>Dynamic</h2>
                  <p>
                    Websites don't have to be static, I love making pages come
                    to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Persantage />
    </>
  );
}

export default About;
