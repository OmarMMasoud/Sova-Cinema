import React from 'react'
import "./style/main.scss"


//components 
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
    <div className="App">
  <Section1/>

<div className="bk">

  <Section2/>
  <Section3/>
  <Section4/> 
  <Section5/> 
  <Section6/> 
  <Section7/>
  <Section8/>

    </div>
    
    </div>
  );
}

export default App