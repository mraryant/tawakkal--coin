 
import '../styles/Section2.css'
import s2img from "../assets/s2img.png"
import S2icon from '../assets/s2icon.png'

import { motion } from "framer-motion"

const Section2 = () => {

   
  
  return (
    <>
      <motion.div id="about" className='s2main' initial={{ opacity: 0 }} transition={{
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
            <p className='s2leftpara'>
              Our vision at Tawakkal Coin is to establish a global standard for ethical innovation within the Islamic realm. We envision a world where technology seamlessly integrates with Islamic teachings, enhancing lives and fostering a sense of unity among the Islamic community.
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
            <p className='s2para'>Discover Tawakkal Coin, a revolutionary cryptocurrency rooted in the principles of Islamic
              finance and driven by a vision of transparency, inclusion, and philanthropy. Join us on a transformative
              journey where technology meets faith, and financial empowerment converges with compassion.</p>
            <div className='s2mid' style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
              <p className='s2midpara'>
              The objectives of Tawakkal Coin are centred around creating a cryptocurrency ecosystem that is deeply rooted in Islamic values and principles, promoting transparency, inclusivity, and philanthropy. 
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
                    <p className='s2featureheading'>Transparent Cryptocurrency</p>

                  </div>
                  <p className='s2featureparagraph'>Tawakkal Coin's primary objective is to develop a cryptocurrency that is fully compliant with Sharia, the Islamic legal framework. It ensures that all aspects of the coin, from its issuance to its usage, align with the ethical guidelines set forth in the Quran and the teachings of the Prophet Muhammad (PBUH). </p>
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
                    <p className='s2featureheading'>Technological Advancements </p>

                  </div>

                  <p className='s2featureparagraph'>Tawakkal Coin aims to integrate technological advancements with Islamic laws, ensuring that the use of blockchain technology and other digital tools is consistent with Islamic ethical standards. This involves developing smart contracts, decentralized applications (dApps), and other technological features that comply with Sharia principles. </p>
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
                    <p className='s2featureheading'>Financial Inclusion and Philanthropy</p>

                  </div>

                  <p className='s2featureparagraph'>objective of Tawakkal Coin is to foster financial inclusion, providing access to financial services for all segments of society. It endeavours to bridge gaps in financial access and participation, particularly in underprivileged or underserved communities. </p>
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