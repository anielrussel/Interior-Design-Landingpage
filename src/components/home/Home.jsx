import React from 'react'
import './home.css'
import header from '../../assets/header.jpg'
import furniture from '../../assets/furniture.jpg'
import ceo from '../../assets/mina.jpg'
import about from '../../assets/about.jpg'
import arrow1 from '../../assets/arrow-right.png'
import arrow2 from '../../assets/arrow-right.png'
import arrow3 from '../../assets/arrow-right.png'

import material1 from '../../assets/material1.jpg'
import material2 from '../../assets/material2.webp'
import material3 from '../../assets/material3.jpg'

import { Product, Footer } from '../../components'

import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        y: -110,
    },
    visible: {
        y: 0,
        transition: {
            type: 'tween',
            duration: 1   
        }
    }
}

const Home = () => {
  return (
    <><div className="home">

          {/*header start */}
          <div className='header'>
              <div className="header-text">
                  <motion.h1
                    initial={{ x: -200 }}
                    animate={{ x: 0 }}
                    transition={{ type: 'tween', duration: 1 }}
                  >Design Your Interior With High Quality.</motion.h1>
                  <hr></hr>
              </div>
              <motion.div className="header-bar"
                variants={containerVariants}
                initial= 'hidden'
                animate= 'visible'
              >
                  <div className="bar-text">
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
              <div className="rotate-text">
                  <p>2022</p>
                  <p> All Rights Reserved</p>
              </div>
              <img src={header} alt='' />
          </div>
          {/*header end */}

          {/*about start */}
          <div className="about">
              <div className="about-text">
                  <p>ABOUT</p>
                  <hr></hr>
                  <h1>“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”</h1>
              </div>
              <div className="about-image">
                  <img src={furniture} alt='' />
              </div>
              <motion.div className="ceo"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'tween', duration: 1, delay: 0.3 }}
              >
                  <img src={ceo} alt='' />
                  <div className="ceo-text">
                      <p>Myoui Mina</p>
                      <span>CEO of Dananz</span>
                  </div>
              </motion.div>
              <motion.div className="ceo-speech"
                initial={{ x: 150}}
                whileInView={{ x: 0 }}
                transition={{ type: 'tween', duration: 1, delay: 0.3 }}
              >
                  <p>Online learning with us does not interfere with your daily life, because learning can be done anytime and anywhere.</p>
                  <button>Learn More</button>
              </motion.div>
          </div>
          {/*about end */}

          {/*service start */}
          <div className="service">
              <div className="service-text">
                  <p>SERVICE</p>
                  <hr></hr>
                  <h1>Attractive furniture with the best quality.</h1>
              </div>
              <div className="service-items">
                  <p>Customize your interior design into a dream place with the best designers and quality furniture.
                      We try our best to fulfill your expectations.</p>
                  <motion.div className="items"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'tween', duration: 0.8 }}
                  >
                      <div className="items-list">
                          <p><span>01</span>Interior Design</p>
                          <p><span>02</span>Consultant</p>
                          <p><span>03</span>Construction Consultant</p>
                      </div>
                      <div className="arrow">
                          <img src={arrow1} alt='' />
                          <img src={arrow2} alt='' />
                          <img src={arrow3} alt='' />
                      </div>
                  </motion.div>
              </div>
              <div className="service-image">
                  <img src={about} alt='' />
              </div>
          </div>
          {/*service end */}

         <Product />

          {/*material start*/}
          <div className="material">
              <div className="material-text">
                  <p>MATERIAL</p>
                  <hr></hr>
                  <motion.div className="material-header"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                  >
                      <h1>Choice of materials for quality furniture.</h1>
                      <p>You can custom the material as desired. And our furniture uses the best materials and selected quality materials.</p>
                  </motion.div>
                  <motion.div className="material-button"
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
                  >
                      <button>See Materials</button>
                  </motion.div>
              </div>
              <div className="material1-image">
                  <img src={material1} alt='' />
              </div>
              <div className="material2-image">
                  <img src={material2} alt='' />
              </div>
              <div className="material3-image">
                  <img src={material3} alt='' />
              </div>
          </div>
          {/*material end*/}
            </div><div className="home-footer">
              <Footer />
            </div></>
  )
}

export default Home