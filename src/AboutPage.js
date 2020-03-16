import React from 'react'
import { motion } from "framer-motion"
import Squares from './Squares'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <h2>Homepage</h2>
      <Squares />
    </motion.div>
  )
}

export default AboutPage