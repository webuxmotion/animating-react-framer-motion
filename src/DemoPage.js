import React, { useState } from 'react'
import { Card, CardGrid } from "./Elements"
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion"
import Modal from './Modal'
import Accordion from './Accordion'
import blue from "./blue.png"
import purp from "./purp.png"
import black from "./black.png"
import green from "./green.png"

const DemoPage = () => {
  const [ value, setValue ] = useState(0)
  const [ isToggled, setToggle ] = useState(false)
  const [ isCardActive, setIsCardActive ] = useState(true)

  const x = useMotionValue(0)
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Demo Page</h2>
      <button
        onClick={() => setToggle(true)}
      >Toggle</button>
      <p>{value}</p>
      <input 
        type="range" 
        min="-100" 
        max="100" 
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
      <Modal isToggled={isToggled} setToggle={setToggle}>
        <Card style={{ background: "var(--purp)" }}>
          <h3>Kiss You</h3>
          <img src={purp} />
        </Card>
      </Modal>
      <Accordion title="The accordion" body="This is the body of the accordion" />
      <CardGrid>
        <Card 
          whileHover={{scale: [1.0, 0.98, 1.02]}}
          whileTap={{ background: "var(--red)" }}
          onHoverEnd={() => console.log("hover end")}
          style={{ background: "var(--purp)" }}
        >
          <h3>Some card</h3>
          <img src={purp} />
        </Card>
        <AnimatePresence>
          {isCardActive && (
            <motion.div 
              exit={{ height: 0, overflow: "hidden", opacity: 0 }}
              transition={{ opacity: {
                duration: 0
              }}}
            >
              <Card
                onDragEnd={(event, info) => {
                  if (Math.abs(info.point.x) > 100) {
                    setIsCardActive(false);
                  }
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0
                }}
                style={{ 
                  x,
                  opacity,
                  background: "var(--blue)"
                }}
              >
                <h3>Some card</h3>
                <img src={blue} />
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
        <Card style={{ background: "var(--black)" }}>
          <h3>Some card</h3>
          <img src={black} />
        </Card>
        <Card style={{ background: "var(--green)" }}>
          <h3>Some card</h3>
          <img src={green} />
        </Card>
      </CardGrid>
    </motion.div>
  )
}

export default DemoPage