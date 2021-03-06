import React from "react";
import "./persantage.css";

function persantage() {
  return (
    <div className="main container-fluid">
      <div className="container tra">
        <div className="row my-4 mt-5 containerone">
          <div className="col-sm m-2 containertwo">
            <div className="card m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      80<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">HTML</h2>
              </div>
            </div>
          </div>
          <div className="col-sm m-2 containertwo">
            <div className="card  m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      80<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">CSS</h2>
              </div>
            </div>
          </div>
          <div className="col-sm m-2 containertwo">
            <div className="card  m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      60<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">JavaScript</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-4 mb-5 containerone">
          <div className="col-sm m-2 containertwo">
            <div className="card  m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      80<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">REACT-JS</h2>
              </div>
            </div>
          </div>
          <div className="col-sm m-2 containertwo">
            <div className="card  m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      50<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">NODE-JS</h2>
              </div>
            </div>
          </div>
          <div className="col-sm m-2 containertwo">
            <div className="card  m-auto">
              <div className="box">
                <div className="percent">
                  <svg>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className="number">
                    <h2>
                      60<span>%</span>{" "}
                    </h2>
                  </div>
                </div>
                <h2 className="lag">MONGODB</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default persantage;
