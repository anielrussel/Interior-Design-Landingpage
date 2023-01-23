import React from 'react'
import './services.css'
import header from '../../assets/services-header.jpg'
import interior from '../../assets/services-interior.jpg'
import consultant from '../../assets/services-consultant.jpg'
import construction from '../../assets/services-construction.jpg'
import Product from '../product/Product'
import Footer from '../footer/Footer'
import { motion } from 'framer-motion'


const Services = () => {
  return (
    <><div className='services'>
      {/*header start */}
      <div className="services-header">
        <motion.div className="services-header-text"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.8 }}
        >
          <h1>Services</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </motion.div>
      </div>
      <div className="services-header-image">
        <img src={header} alt="" />
      </div>
      {/*header end */}

      {/*achievement start */}
      <div className="services-achievement">
        <p>ACHIEVEMENT</p>
        <hr></hr>
        <div className="services-achievement-interior">
          <img src={interior} alt='' />
          <motion.div className="services-achievement-interior-text"
           initial={{ x: 100}}
           whileInView={{ x: 0 }}
           transition={{ type: 'tween', duration: 1 }}
          >
            <h1>Interior Design</h1>
            <p>Customize your interior design into a dream place with the best designers and quality furniture.
              We try our best to fulfill your expectations.</p>
          </motion.div>
        </div>

        <div className="services-achievement-consultant">
          <img src={consultant} alt='' />
          <motion.div className="services-achievement-consultant-text"
            initial={{ x: 100}}
            whileInView={{ x: 0 }}
            transition={{ type: 'tween', duration: 1 }}
          >
            <h1>Consultant</h1>
            <p>Customize your interior design into a dream place with the best designers and quality furniture.
              We try our best to fulfill your expectations.</p>
          </motion.div>
        </div>

        <div className="services-achievement-construction">
          <img src={construction} alt='' />
          <motion.div className="services-achievement-construction-text"
            initial={{ x: 100}}
            whileInView={{ x: 0 }}
            transition={{ type: 'tween', duration: 1 }}
          >
            <h1>Construction Consultant</h1>
            <p>Customize your interior design into a dream place with the best designers and quality furniture.
              We try our best to fulfill your expectations.</p>
          </motion.div>
        </div>
      </div>
      {/*achievement end */}
      <div className="services-product">
        <Product />
      </div>
    </div>
    <div className="services-footer">
        <Footer />
      </div></>
  )
}

export default Services