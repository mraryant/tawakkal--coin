import { useState, useEffect } from 'react'
import './App.css'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'
import Section6 from './sections/Section6'
import Section1 from './sections/Section1'
import Topnav from './components/Topnav'
import Footer from './sections/Footer'

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 20);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Topnav />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          {/* <Section6 /> */}
          <Footer />
        </div>
      )}

    </>
  )
}

export default App
