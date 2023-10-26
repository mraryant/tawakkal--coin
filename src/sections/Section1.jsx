 
import back from '../assets/back1.png'
import '../styles/Section1.css'
import s1row from '../assets/ads.png'
import { motion } from "framer-motion"


const Section1 = () => {

  return (
    <>

      <motion.div className='s1main'
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
        }}>
        
        
        <motion.img
          initial={{
            scale: 1.05,
            overflow:"visible,"
          }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          whileInView={{
            scale:1,
          }}
          src={back} className='back' />
        


        <div className='s1hero'>
          <div className='mainhead'>
            <p className='maintitle'> Welcome to <br />
              Tawakkal Coin</p>
          </div>
          <div className='paradiv'>

            <p className='mainpara'>We are on a mission to onboard over 1.8+ billion Muslims into digital finance without compromising the values and faith. Islamic coin is the native currency of HAQQ, an ethics first, scalable and interoperable blockchain built on Proof-of-Stake with fast finality.</p>

          </div>
        </div>



        <div className='s1button'>
          <motion.button className="btn"
            initial={{ x: -150 }}
            transition={{ ease: "easeInOut", duration: 1, }}
            whileInView={{x:0}}
          >
            Buy Tokens
          </motion.button>

          <motion.button className="btn"
            initial={{ x:150 }}
            transition={{ ease: "easeInOut", duration: 1, }}
            whileInView={{ x: 0 }}
          >
            Get Whitepaper
          </motion.button>
        </div>
        <div className='blackbox'>
          <p className='s1small'>Trusted by the worlds best companies [social proof to build credibility]</p>
          <img src={s1row} className='s1row' />

        </div>
      </motion.div>


    </>
  )
}

export default Section1