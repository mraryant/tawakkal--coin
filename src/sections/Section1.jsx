 
import back from '../assets/back1.png'
import '../styles/Section1.css'
import s1row from '../assets/ads.png'
import { motion } from "framer-motion"


const Section1 = () => {
  const openPDF = () => {
    window.open("/twklw.pdf", "_blank")
  }
   

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

            <p className='mainpara'>At Tawakkal Coin, we're redefining the future of finance while staying true to our ethical roots. Our ecosystem merges cutting-edge technology with the principles of Sharia to create a dynamic platform that caters not just to Muslims but to people of all backgrounds.</p>

          </div>
        </div>



        <div className='s1button'>
          <motion.a className="btn"
            initial={{ x: -150 }}
            transition={{ ease: "easeInOut", duration: 1, }}
            whileInView={{x:0}}
            href='https://presale.twkl.io/'
            target='blank'
          >
            Buy Tokens
          </motion.a>

          <motion.button className="btn"
            initial={{ x:150 }}
            transition={{ ease: "easeInOut", duration: 1, }}
            whileInView={{ x: 0 }}
            onClick={openPDF}
          >
            Get Whitepaper
          </motion.button>
        </div>
        <div className='blackbox'>
          <p className='s1small'>Exchange Listing Comming Soon .....</p>
          <img src={s1row} className='s1row' />
        </div>
      </motion.div>


    </>
  )
}

export default Section1