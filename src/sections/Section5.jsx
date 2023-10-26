 
import '../styles/Section5.css'
import Piechart from '../assets/piechart.png'
import { motion } from "framer-motion"
const Section5 = () => {

 
 
  const whileInViewAnimation = {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease:"easeInOut",
    },

  };


  return (
    <>
      <motion.div className='s5main' initial={{ opacity: 0 }} transition={{
        ease: "linear",
        duration: 1,
      }}
        whileInView={{ opacity: 1 }}>
        <div className='s5block'>
          <div className='s3header'>
            <p className='s3headersmall'>UTILITY & DISTRIBUTION</p>
            <p className='s3header1'>Tokenomics</p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
              <p className='s5para1'>Tokenomics in the Tawakkal Coin ecosystem refers to the structure, purpose, distribution, and use of the Tawakkal Coin (TWKL) within the blockchain-based platform.</p>

            </div>
          </div>

          <div className='s5token'>
            <motion.div
              initial="initial"
              whileInView={whileInViewAnimation}

              className='tokenleft'>
              
              <motion.div initial={{ opacity:0 , x:-300}} whileInView={whileInViewAnimation} className='tokenleft1'>
                <p className='s5leftname'>Coin Name</p>
                <div className='s5detail'>
                  <p className='s5para'>Tawakkal Coin</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -300 }} whileInView={whileInViewAnimation} className='tokenleft1'>
                <p className='s5leftname'>Coin Symbol</p>
                <div className='s5detail'>
                  <p className='s5para'>TWKL</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -300 }} whileInView={whileInViewAnimation} className='tokenleft1'>
                <p className='s5leftname'>Tech</p>
                <div className='s5detail'>
                  <p className='s5para'>BEP 20</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -300 }} whileInView={whileInViewAnimation} className='tokenleft1'>
                <p className='s5leftname'>Supply</p>
                <div className='s5detail'>
                  <p className='s5para'>120 CR</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: -300 }} whileInView={whileInViewAnimation} className='tokenleft1'>
                <p className='s5leftname'>Decimal</p>
                <div className='s5detail'>
                  <p className='s5para'>09</p>
                </div>
              </motion.div>

            </motion.div>
            <div className='tokenright'>
              <img src={Piechart} className='piechart' />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Section5