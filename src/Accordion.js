import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, height: 'auto' },
  closed: { opacity: 0, height: 0 }
}

const Accordion = ({ title = "default", body = "default body" }) => {
  const [ isToggled, setIsToggled ] = useState(false)

  return (
    <article>
      <h2
        role="button"
        onClick={() => setIsToggled(prevState => !prevState)}
      >{title}</h2>
      <AnimatePresence>
        {isToggled &&
          <motion.div
            variants={variants}
            style={{overflow: "hidden"}}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>{body}</p>
          </motion.div>
        }
      </AnimatePresence>
    </article>
  )
}

export default Accordion