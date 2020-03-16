import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Container, Header } from "./Elements";
import Nav from './Nav';
import "./App.css";
import Menu from "./Menu";

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import DemoPage from './DemoPage';

function App() {
  const [ isNavOpen, setIsNavOpen ] = useState(false)

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
        <Menu onClick={() => setIsNavOpen(true)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <h1>Header</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/demo">Demo</Link>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <AnimatePresence>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/demo" component={DemoPage} />
          </Switch>
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

export default AppWrapper;
