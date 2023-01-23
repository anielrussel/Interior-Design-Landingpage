import React from 'react'
import './teams.css'
import header from '../../assets/teams-header.jpg'
import ceo from '../../assets/mina.jpg'
import minimalist from '../../assets/minimalist-room.jpg'
import vintage from '../../assets/vintage-room.jpg'
import modern from '../../assets/modern-room.jpg'
import traditional from '../../assets/traditional-room.jpg'
import { Footer, Whychooseus } from '../../components'
import { motion } from 'framer-motion'

//animation
const containerVariants = {
  hidden: {
    x: 100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1
    }
  }
}

//animation
const container1Variants = {
  hidden: {
    x: -100,
    opacity: 0
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1
    }
  }
}

const Teams = () => {
  return (
    <><div className='teams'>
      {/*header start */}
      <div className="teams-header">
        <motion.div className="teams-header-text"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'tween', duration: 0.8 }}
        >
          <h1>Portfolio</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </motion.div>
      </div>
      <div className="teams-header-image">
        <img src={header} alt="" />
      </div>
      {/*header end */}

      {/*portfolio start */}
      <div className="teams-about">
        <div className="teams-about-text">
          <p>PORTFOLIO</p>
          <hr></hr>
        </div>
        <div className="teams-about-minimalist-image">
          <img src={minimalist} alt='' />
        </div>

        <motion.div className="minimalist-ceo"
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
        >
          <img src={ceo} alt='' />
          <div className="minimalist-ceo-text">
            <p>Myoui Mina</p>
            <span>CEO of Dananz</span>
          </div>
        </motion.div>
        <motion.div className="minimalist-ceo-speech"
          variants={containerVariants}
          initial='hidden'
          whileInView='show'
        >
          <h1>Minimalist Room</h1>
          <p>Online learning with us does not interfere with your daily life, because learning can be done anytime and anywhere.</p>
          <button>Learn More</button>
        </motion.div>

        <motion.div className="vintage-ceo"
          variants={container1Variants}
          initial='hidden'
          whileInView='show'        
        >
          <img src={ceo} alt='' />
          <div className="vintage-ceo-text">
            <p>Myoui Mina</p>
            <span>CEO of Dananz</span>
          </div>
        </motion.div>
        <motion.div className="vintage-ceo-speech"
          variants={container1Variants}
          initial='hidden'
          whileInView='show'
        >
          <h1>Vintage Room</h1>
          <p>Online learning with us does not interfere with your daily life, because learning can be done anytime and anywhere.</p>
          <button>Learn More</button>
        </motion.div>
        <div className="teams-about-vintage-image">
          <img src={vintage} alt='' />
        </div>

        <div className="teams-about-modern-image">
          <img src={modern} alt='' />
        </div>
        <motion.div className="modern-ceo"
          variants={containerVariants}
          initial='hidden'
          whileInView='show'        
        >
          <img src={ceo} alt='' />
          <div className="modern-ceo-text">
            <p>Myoui Mina</p>
            <span>CEO of Dananz</span>
          </div>
        </motion.div>
        <motion.div className="modern-ceo-speech"
          variants={containerVariants}
          initial='hidden'
          whileInView='show'        
        >
          <h1>Modern Room</h1>
          <p>Online learning with us does not interfere with your daily life, because learning can be done anytime and anywhere.</p>
          <button>Learn More</button>
        </motion.div>

        <motion.div className="traditional-ceo"
          variants={container1Variants}
          initial='hidden'
          whileInView='show'        
        >
          <img src={ceo} alt='' />
          <div className="traditional-ceo-text">
            <p>Myoui Mina</p>
            <span>CEO of Dananz</span>
          </div>
        </motion.div>
        <motion.div className="traditional-ceo-speech"
          variants={container1Variants}
          initial='hidden'
          whileInView='show'        
        >
          <h1>Traditional Room</h1>
          <p>Online learning with us does not interfere with your daily life, because learning can be done anytime and anywhere.</p>
          <button>Learn More</button>
        </motion.div>
        <div className="teams-about-traditional-image">
          <img src={traditional} alt='' />
        </div>
      </div>
      {/*portfolio end */}
      <div className="teams-whychooseus">
        <Whychooseus />
      </div>
    </div><div className="teams-footer">
        <Footer />
      </div></>
  )
}

export default Teams