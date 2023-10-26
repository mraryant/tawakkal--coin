 
import '../styles/Section2.css'
import s2img from "../assets/s2img.png"
import S2icon from '../assets/s2icon.png'

import { motion } from "framer-motion"

const Section2 = () => {

   
  
  return (
    <>
      <motion.div className='s2main' initial={{ opacity: 0 }} transition={{
        ease: "linear",
        duration: 1,
      }}
      
        whileInView={{ opacity: 1 }}>
        <div className='s2block'>
          <motion.div
            initial={{
              opacity: 0,
              y: -200
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              duration: 20,
            }}
            className='s2left'>
            <img src={s2img} style={{ width: "100%", height: "100%" }} alt='react' />
            <p className='s2leftpara'>Discover Tawakkal Coin, a revolutionary cryptocurrency rooted in the principles of Islamic
              finance and driven by a vision of transparency, inclusion, and philanthropy. Join us on a transformative
              journey where technology meets faith, and financial empowerment converges with compassion.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 200
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              duration: 20,
            }}
            className='s2right'>
            <p className='s2small'>About Us</p>
            <p className='s2heading'>a new connection protocols for work</p>
            <p className='s2para'>Our platform is to increase your money that can easily grow your money in the form of
              cryptocurrency which is depend the main which is responsible for maintainig the software
              Our platform is to increase your money that can easily grow your money in the form of
              cryptocurrency which is depend the main which is responsible for maintainig the software</p>
            <div className='s2mid' style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
              <p className='s2midpara'>
                the platform of crypto is completely designed with the principal
                of maintaining the main wire of accounts that they had some
                virtual time of legacy
              </p>
            </div>
            <div className='s2feature'>
              <div className='s2featureleft'>
                <motion.div
                  initial={{
                    opacity: 0,
                    
                  }}
                  transition={{
                    ease: "easeInOut",
                    duration:1,
                    delay:0.3,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
 
                  }}
                  className='s2points'>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={S2icon} style={{ width: 22, height: 23, marginRight: 5 }} />
                    <p className='s2featureheading'>Islamic Principles at the Core</p>

                  </div>
                  <p className='s2featureparagraph'>Tawakkal Coin is designed in compliance with Islamic finance principles,
                    ensuring every transaction and engagement aligns with the teachings of Islam,
                    providing a halal alternative for financial empowerment.</p>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,

                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.6,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,

                  }}
                  className='s2points'>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={S2icon} style={{ width: 22, height: 23, marginRight: 5 }} />
                    <p className='s2featureheading'>Community-Driven Ecosystem</p>

                  </div>

                  <p className='s2featureparagraph'>Our ecosystem thrives on community participation and engagement. As we grow, we invite you to actively shape the future of Tawakkal Coin through governance and feedback.</p>
                </motion.div>
              </div>
              <div className='s2featureright'>
                <motion.div
                  initial={{
                    opacity: 0,

                  }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,

                  }}
                  className='s2points'>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={S2icon} style={{ width: 22, height: 23, marginRight: 5 }} />
                    <p className='s2featureheading'>Charitable Endeavors</p>

                  </div>

                  <p className='s2featureparagraph'>We believe in giving back to society. With Tawakkal Coin, every transaction contributes to charitable causes, uplifting communities and making a meaningful impact on a global scale.</p>
                </motion.div>
                <motion.div
                  initial={{
                    opacity: 0,

                  }}
                  transition={{
                    ease: "easeInOut",
                    duration:1,
                    delay: 1.2,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,

                  }}
                  className='s2points'>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img src={S2icon} style={{ width: 22, height: 23, marginRight: 5 }} />
                    <p className='s2featureheading'>Streamlined compliance</p>

                  </div>

                  <p className='s2featureparagraph'>The presence of the Tawakkal Sharia Committee ensures that every aspect of Tawakkal Coins ecosystem is compliant with Sharia laws. This includes project approval, ensuring that the activities and offerings are in line with Islamic ethics.</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>





      {/* <div id="parant">
        <div id="child1">H</div>
        <div id="child2">I</div>
        <div id="child3">J</div>
        <div id="child4">K</div>
      </div> */}



    </>
  )
}

export default Section2