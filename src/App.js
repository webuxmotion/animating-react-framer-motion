import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardGrid, Container, Header } from "./Elements";
import Modal from './Modal';
import Accordion from './Accordion';
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {
  const [ value, setValue ] = useState(0)
  const [isToggled, setToggle] = useState(false)

  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
    >
      <Header>
        <Menu />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
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
        <Accordion title="The accordion" body="this is the body" />
        <CardGrid>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} />
          </Card>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
