import React from 'react'
import './whychooseus.css'
import highquality from '../../assets/highquality.png'
import designer from '../../assets/jihyo.png'
import bestservice from '../../assets/bestservice.png'
import { motion } from 'framer-motion'

const cardVariants = {
    hover: {
        scale: 1.1,
        boxShadow: '0px 0px 8px rgb(0, 0, 5,)',
        transition: {
            duration: 0.4
        }
    }
}

const Whychooseus = () => {
  return (
    <div className='whychooseus'>
        <div className="whychooseus-text">
          <p>SERVICE</p>
          <h1>Why Choose Us</h1>
          <h2>Customize your interior design into a dream place with the best designers and quality furniture. 
            We try our best to fulfill your expectations.</h2>
        </div>
        <div className="whychooseus-card">
            <motion.div className="highquality"
                variants={cardVariants}
                whileHover= 'hover'
            >
                <div className="highquality-image">
                    <img src={highquality} alt='' />
                </div>
                    <h1>High Quality</h1>
                    <p>Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.</p>
            </motion.div>
            <motion.div className="professional-designer"
                variants={cardVariants}
                whileHover= 'hover'
            >
                <div className="professional-designer-image">
                    <img src={designer} alt='' />
                </div>
                    <h1>Professional Designer</h1>
                    <p>Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.</p>
            </motion.div>
            <motion.div className="best-service"
                variants={cardVariants}
                whileHover= 'hover'>
                <div className="best-service-image">
                    <img src={bestservice} alt='' />
                </div>
                    <h1>Best Services</h1>
                    <p>Customize your interior design into a dream place with the best designers and quality furniture. 
                        We try our best to fulfill your expectations.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Whychooseus