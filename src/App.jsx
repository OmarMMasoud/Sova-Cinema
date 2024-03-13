import React from 'react'
import "./style/main.scss"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//components 
import Nav from '../src/components/nav'
import Section1 from '../src/components/sections/section1'
import Section2 from '../src/components/sections/section2'
import Section3 from '../src/components/sections/section3'
import Section4 from '../src/components/sections/section4'
import Section5 from '../src/components/sections/section5'
import Section6 from '../src/components/sections/section6'
import Section7 from '../src/components/sections/section7'
import Section8 from '../src/components/sections/section8'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Section1 />
            <div className="bk">
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5  />
              <Section6 />
              <Section7 />
            </div>
          </div>
        } />
        <Route path="/booking" element={
          <div className="bk">
            <Nav />
            <Section8 />
          </div>
        } />
      </Routes>
    </Router>
  );
}
export default App