import React from 'react'
import './product.css'

import arrow1 from '../../assets/arrow-right.png'
import arrow2 from '../../assets/arrow-right.png'
import arrow3 from '../../assets/arrow-right.png'
import arrow4 from '../../assets/arrow-right.png'

import { motion } from 'framer-motion'

const Product = () => {
  return (
    <div className="product">
     <div className="product-text">
         <p>PRODUCT</p>
         <div className="text-header">
             <h1>Choose your product theme.</h1>
             <p>Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p>
         </div>
     </div>
     <motion.div className="product-items"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'tween', duration: 1 }}
     >
         <div className="product-list">
             <h1><span>01</span>Vintage</h1>
             <p>the use of simple and limited elements to get the best effect or impression.</p>

             <h1><span>02</span>Minimalist</h1>
             <p>the use of simple and limited elements to get the best effect or impression.</p>

             <h1><span>03</span>Modern</h1>
             <p>the use of simple and limited elements to get the best effect or impression.</p>

             <h1><span>04</span>Traditional</h1>
             <p>the use of simple and limited elements to get the best effect or impression.</p>
         </div>
         <div className="product-arrow">
             <img src={arrow1} alt='' />
             <img src={arrow2} alt='' />
             <img src={arrow3} alt='' />
             <img src={arrow4} alt='' />
         </div>
     </motion.div>
    </div>

  )
}

export default Product