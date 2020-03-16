import React from 'react'
import { motion } from "framer-motion"
import Slideshow from './Slideshow'

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>Homepage</h2>
      <Slideshow />
    </motion.div>
  )
}

export default HomePage