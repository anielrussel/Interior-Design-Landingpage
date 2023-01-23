import React from "react";
import "./about.css";
import header from "../../assets/about-header.jpg";
import achievementimage from "../../assets/about-achievement.jpg";
import Whychooseus from "../whychooseus/Whychooseus";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <><div className="aboutus">
          {/*header start */}
          <motion.div className="aboutus-header"
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.8 }}
          >
              <div className="aboutus-header-text">
                  <h1>About Us</h1>
                  <p>
                      It is a long established fact that a reader will be distracted by
                      the readable content of a page when looking at its layout.
                  </p>
              </div>
          </motion.div>
          <div className="aboutus-header-image">
              <img src={header} alt="" />
          </div>
          {/*header end */}

          {/*achievement start */}
          <div className="aboutus-achievement">
              <div className="aboutus-achievement-text">
                  <p>ACHIEVEMENT</p>
                  <hr></hr>
                  <motion.h1
                    initial={{ x: 200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'tween', duration: 1 }}
                  >
                      Interior customization with Dananz, best quality with professional
                      workers.
                  </motion.h1>
              </div>
              <div className="aboutus-achievement-image">
                  <div className="aboutus-image">
                      <img src={achievementimage} alt="" />
                  </div>
                  <motion.div className="aboutus-header-bar"
                    initial={{ y: -100 }}
                    whileInView={{ y: 0 }}
                    transition={{ type: 'tween', duration: 1}}
                  >
                      <div className="aboutus-bar-text">
                          <h1>350+</h1>
                          <p>Project Completed</p>
                          <br></br>
                          <br></br>
                          <br></br>
                          <h1>23+</h1>
                          <p>Professional Teams</p>
                          <br></br>
                          <br></br>
                          <br></br>
                          <h1>15+</h1>
                          <p>Years Experience</p>
                      </div>
                  </motion.div>
              </div>
          </div>
          {/*achievement end */}
          <Whychooseus />
    </div>
        <div className="aboutus-footer">
              <Footer />
        </div></>
  );
};

export default About;
