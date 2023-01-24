import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [more, Setmore] = useState(false);
  const moreProject = () => {
    Setmore(true);
  };
  return (
    <>
      <Navbar />
      {/* hero section */}
      <div className="hero">
        <p className="hello">Hi ,my name is</p>
        <h1 className="intro">
          Dinesh Yadav / I build things for Web / A Frontend focused web
          developer.
        </h1>
      </div>
      {/* work or project section */}
      <div className="work flex-class flex-column">
        <div className="project  flex-class flex-column flex-lg-row  flex-md-row flex-wrap">
          <div className=" project1  image-size">
            <div className="project-desc flex-class flex-column">
              <div className="links d-flex">
                <div className="circle flex-class">
                  <img src="./github.png" alt="" className="github" />
                </div>
                <div className="circle1 flex-class">
                  <img src="./link.png" alt="" className="link" />
                </div>
              </div>
              <div className="project-title flex-class flex-column">
                <h1>Image Searching WebApp</h1>
                <p>- Angular</p>
              </div>
            </div>
          </div>
          <div className="project2 image-size">
            <div className="project-desc flex-class flex-column">
              <div className="links d-flex">
                <div className="circle flex-class">
                  <img src="./github.png" alt="" className="github" />
                </div>
                <div className="circle1 flex-class">
                  <img src="./link.png" alt="" className="link" />
                </div>
              </div>
              <div className="project-title flex-class flex-column">
                <h1>MyShop  WebApp</h1>
                <p>- Angular</p>
              </div>
            </div>
          </div>
          <div className="project3 image-size">
            <div className="project-desc flex-class flex-column">
              <div className="links d-flex">
                <div className="circle flex-class">
                  <img src="./github.png" alt="" className="github" />
                </div>
                <div className="circle1 flex-class">
                  <img src="./link.png" alt="" className="link" />
                </div>
              </div>
              <div className="project-title flex-class flex-column">
                <h1>NoteBook WebApp</h1>
                <p>- React</p>
              </div>
            </div>
          </div>
          <div className="project4 image-size">
            <div className="project-desc flex-class flex-column">
              <div className="links d-flex">
                <div className="circle flex-class">
                  <img src="./github.png" alt="" className="github" />
                </div>
                <div className="circle1 flex-class">
                  <img src="./link.png" alt="" className="link" />
                </div>
              </div>
              <div className="project-title flex-class flex-column">
                <h1>Local Store Website</h1>
                <p>- React</p>
              </div>
            </div>
          </div>
          <div className="project5 image-size">
            <div className="project-desc flex-class flex-column">
              <div className="links d-flex">
                <div className="circle flex-class">
                  <img src="./github.png" alt="" className="github" />
                </div>
                <div className="circle1 flex-class">
                  <img src="./link.png" alt="" className="link" />
                </div>
              </div>
              <div className="project-title flex-class flex-column">
                <h1>Redesign ISRO Website</h1>
                <p>- React</p>
              </div>
            </div>
          </div>
        </div>
        {!more && (
          <button className="btn btn-md btn-light" onClick={moreProject}>
            LOAD MORE
          </button>
        )}
        {more && (
          <div className="more project flex-class flex-column  flex-lg-row  flex-md-row flex-wrap">
            <div className="project6 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <img src="./github.png" alt="" className="github" />
                  </div>
                  <div className="circle1 flex-class">
                    <img src="./link.png" alt="" className="link" />
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Rock Paper Scissors Game</h1>
                  <p>- React</p>
                </div>
              </div>
            </div>
            <div className="project7 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <img src="./github.png" alt="" className="github" />
                  </div>
                  <div className="circle1 flex-class">
                    <img src="./link.png" alt="" className="link" />
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Guess The Number Game</h1>
                  <p>- React</p>
                </div>
              </div>
            </div>
            <div className="project8 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <img src="./github.png" alt="" className="github" />
                  </div>
                  <div className="circle1 flex-class">
                    <img src="./link.png" alt="" className="link" />
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Note WebApp</h1>
                  <p>- React</p>
                </div>
              </div>
            </div>
            <div className="project9 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <img src="./github.png" alt="" className="github" />
                  </div>
                  <div className="circle1 flex-class">
                    <img src="./link.png" alt="" className="link" />
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Live Movie Api</h1>
                  <p>- Angular</p>
                </div>
              </div>
            </div>
            <div className="project10 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <img src="./github.png" alt="" className="github" />
                  </div>
                  <div className="circle1 flex-class">
                    <img src="./link.png" alt="" className="link" />
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>ToDo WebApp</h1>
                  <p>- React</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* service section */}
      <div className="services ">
        <h1 className="service-heading">WHAT I DO</h1>
        <div className="service flex-class flex-column flex-lg-row  flex-md-row ">
          <div className="service1 service-border">
            <p className="service-number">01</p>
            <div className="service-name flex-class">
              <img
                src="./react.png"
                alt="react logo"
                className="service1-logo"
              />
              <h1 className="service-name-heading">Frontend Development</h1>
            </div>
            <div className="service-text">
              Development expereience in HTML , CSS, JS,
              <span className="colorText">REACT</span> and
              <span className="colorText">ANGULAR </span>
              framework.
            </div>
          </div>

          <div className="service2 service-border">
            <p className="service-number">02</p>
            <div className="service-name flex-class">
              <img
                src="./screen.png"
                alt="monitor logo"
                className="service1-logo"
              />
              <h1 className="service-name-heading">Software Development</h1>
            </div>
            <div className="service-text">
              Expereienced in both functional and OOP : C++ ,
              <span className="colorText">JavaScript</span> , TypeScript .
            </div>
          </div>

          <div className="service3 service-border">
            <p className="service-number">03</p>
            <div className="service-name flex-class">
              <img
                src="./toolbox.png"
                alt="toolBox logo"
                className="service1-logo"
              />
              <h1 className="service-name-heading">Backend Development</h1>
            </div>
            <div className="service-text">
              Expereienced in <span className="colorText">NodeJs </span>,
              Express , Mongodb and Sql .
            </div>
          </div>
        </div>
      </div>

      {/* Contact / footer  */}
      <div className="contact">
        <div className="social flex-class">
          <div className="instagram-logo social-logo"></div>
          <div className="linkedin-logo social-logo"></div>
          <div className="gmail-logo social-logo"></div>
          <div className="call-logo social-logo"></div>
        </div>
        <p className="copywright flex-class">@2023 by Dinesh Yadav</p>
      </div>
    </>
  );
}

export default App;
