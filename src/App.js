import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [more, Setmore] = useState(false);
  const moreProject = () => {
    Setmore(true);
  };
  return (
    <>
      <BrowserRouter>
      <div className="overlay"></div>
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
                    <a
                      href="https://github.com/dkdineshyadav19/MEANSTACKProject"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="./github.png" alt="" className="github" />
                    </a>
                  </div>
                  <div className="circle1 flex-class">
                    <a
                      href="https://dkdineshyadav19.github.io/MEANSTACKProject/"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="./link.png" alt="" className="link" />
                    </a>
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>MyShop WebApp</h1>
                  <p>- Angular</p>
                </div>
              </div>
            </div>
            <div className="project2 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <a
                      href="https://github.com/dkdineshyadav19/Image-Searching-angular-api"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="./github.png" alt="" className="github" />
                    </a>
                  </div>
                  <div className="circle1 flex-class">
                    <a
                      href="https://dkdineshyadav19.github.io/Image-Searching-angular-api/"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="./link.png" alt="" className="link" />
                    </a>
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Image Searching WebApp</h1>
                  <p>- Angular</p>
                </div>
              </div>
            </div>
            <div className="project3 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <button className="isDisabled" href="/" without rel="noreferrer" disabled>
                      <img src="./github.png" alt="" className="github" />
                    </button>
                  </div>
                  <div className="circle1 flex-class">
                    <button className="isDisabled" href="/" disabled>
                      <img src="./link.png" alt="" className="link" />
                    </button>
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>NoteBook WebApp</h1>
                  <p>- Coming Soon</p>
                </div>
              </div>
            </div>
            <div className="project4 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <a
                      href="https://github.com/dkdineshyadav19/ASP_website"
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      <img src="./github.png" alt="" className="github" />
                    </a>
                  </div>
                  <div className="circle1 flex-class">
                    <a
                      href="https://dkdineshyadav19.github.io/ASP_website/"
                      target="_blank"
                      without
                      rel="noreferrer" 
                    >
                      <img src="./link.png" alt="" className="link" />
                    </a>
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Small Business Website</h1>
                  <p>- React</p>
                </div>
              </div>
            </div>
            <div className="project5 image-size">
              <div className="project-desc flex-class flex-column">
                <div className="links d-flex">
                  <div className="circle flex-class">
                    <button className="isDisabled " href="/" disabled>
                      <img src="./github.png" alt="" className="github" />
                    </button>
                  </div>
                  <div className="circle1 flex-class">
                    <button className="isDisabled" href="/"  disabled>
                      <img src="./link.png" alt="" className="link" />
                    </button>
                  </div>
                </div>
                <div className="project-title flex-class flex-column">
                  <h1>Redesign ISRO Website</h1>
                  <p>- Coming Soon</p>
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
                      <a
                        href="https://github.com/dkdineshyadav19/rock-paper-scissors"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./github.png" alt="" className="github" />
                      </a>
                    </div>
                    <div className="circle1 flex-class">
                      <a
                        href="https://dkdineshyadav19.github.io/rock-paper-scissors/"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./link.png" alt="" className="link" />
                      </a>
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
                      <a
                        href="https://github.com/dkdineshyadav19/GuessTheNumber-ReactGame"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./github.png" alt="" className="github" />
                      </a>
                    </div>
                    <div className="circle1 flex-class">
                      <a
                        href="https://dkdineshyadav19.github.io/GuessTheNumber-ReactGame/"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./link.png" alt="" className="link" />
                      </a>
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
                      <a
                        href="https://github.com/dkdineshyadav19/noteapp-react"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./github.png" alt="" className="github" />
                      </a>
                    </div>
                    <div className="circle1 flex-class">
                      <a
                        href="https://dkdineshyadav19.github.io/noteapp-react"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./link.png" alt="" className="link" />
                      </a>
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
                      <a
                        href="https://github.com/dkdineshyadav19/MovieApp"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./github.png" alt="" className="github" />
                      </a>
                    </div>
                    <div className="circle1 flex-class">
                      <a
                        href="https://dkdineshyadav19.github.io/MovieApp/"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./link.png" alt="" className="link" />
                      </a>
                    </div>
                  </div>
                  <div className="project-title flex-class flex-column">
                    <h1>Latest Movie</h1>
                    <p>- Angular</p>
                  </div>
                </div>
              </div>
              <div className="project10 image-size">
                <div className="project-desc flex-class flex-column">
                  <div className="links d-flex">
                    <div className="circle flex-class">
                      <a
                        href="https://github.com/dkdineshyadav19/TodoUsingReact"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./github.png" alt="" className="github" />
                      </a>
                    </div>
                    <div className="circle1 flex-class">
                      <a
                        href="https://dkdineshyadav19.github.io/TodoUsingReact/"
                        target="_blank"
                        without
                        rel="noreferrer"
                      >
                        <img src="./link.png" alt="" className="link" />
                      </a>
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
          <h1 className="service-heading text-center">WHAT I DO</h1>
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
              <p className="service-text">
                Development expereience in HTML , CSS , JS ,
                <span className="colorText"> REACT</span> and
                <span className="colorText"> ANGULAR </span>
                framework.
              </p>
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
              <p className="service-text">
                Expereienced in both functional and OOP : C++ ,
                <span className="colorText"> JavaScript</span> , TypeScript .
              </p>
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
              <p className="service-text">
                Expereienced in <span className="colorText">NodeJs </span>,
                Express , Mongodb and Sql .
              </p>
            </div>
          </div>
        </div>

        {/* Contact / footer  */}
        <div className="contact" id="contact">
          <div className="social flex-class">
            <a
              href="https://github.com/dkdineshyadav19"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="instagram-logo social-logo"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-yadav-14b60b16b/"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="linkedin-logo social-logo"></div>
            </a>
            <a
              href="mailto:dkdineshyadav19@gmail.com"
              target="_blank"
              without
              rel="noreferrer"
            >
              <div className="gmail-logo social-logo"></div>
            </a>
            <a href="tel:7988582540" target="_blank" without rel="noreferrer">
              <div className="call-logo social-logo"></div>
            </a>
          </div>
          <p className="copywright flex-class">@2023 by Dinesh Yadav</p>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
