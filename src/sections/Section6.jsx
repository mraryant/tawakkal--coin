
import '../styles/Section6.css'
import Team3 from "../assets/team01.png"
import Team2 from "../assets/team4.png"
import Team4 from "../assets/team4.png"
import Icon1 from '../assets/LinkedIn.svg'
import Icon2 from '../assets/Dribble.svg'
import Icon3 from '../assets/X.svg'
import { motion } from "framer-motion"
const Section6 = () => {

  const animation = {
      opacity: 0,
      scale: 0.7,
  }
  const whileInViewAnimation = {
    opacity: 1,
    scale: 1,
     
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      type:"spring"
    },

  };

  return (
    <>
      <motion.div className='s6main' id="team"
        >
        <div className='s6block'>
          <div className='s3header'>
            <p className='s3headersmall'>ADVISORY BOARD</p>
            <p className='s3header1'>Team Members</p>

          </div>
          <div className='s6team'>
            <motion.div initial={animation}
              whileInView={whileInViewAnimation}  className='team1'>
              <div className='teamimg' style={{ height: "50%", backgroundColor: "black" }}>
                <img src={Team3} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
              </div>
              <div className='teamdetail'>
                <p className='teamname'>Sheikh Khalifa</p>
                <p className='teamjob'>Co-Founder, CEO</p>
                <p className='teamdesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='teamicon'>
                  <img src={Icon1} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon2} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon3} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                </div>
              </div>

            </motion.div>

            <motion.div initial={animation}
              whileInView={whileInViewAnimation}  className='team1'>
              <div className='teamimg' style={{ height: "50%", backgroundColor: "black" }}>
                <img src={Team2} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
              </div>
              <div className='teamdetail'>
                <p className='teamname'>Sheikh Khalifa</p>
                <p className='teamjob'>Co-Founder, CEO</p>
                <p className='teamdesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='teamicon'>
                  <img src={Icon1} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon2} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon3} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                </div>
              </div>
            </motion.div>


            <motion.div initial={animation}
              whileInView={whileInViewAnimation}  className='team1'>
              <div className='teamimg' style={{ height: "50%", backgroundColor: "black" }}>
                <img src={Team3} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
              </div>
              <div className='teamdetail'>
                <p className='teamname'>Sheikh Khalifa</p>
                <p className='teamjob'>Co-Founder, CEO</p>
                <p className='teamdesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='teamicon'>
                  <img src={Icon1} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon2} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon3} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                </div>
              </div>
            </motion.div>

            <motion.div initial={animation}
              whileInView={whileInViewAnimation}  className='team1'>
              <div className='teamimg' style={{ height: "50%", backgroundColor: "black" }}>
                <img src={Team4} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }} />
              </div>
              <div className='teamdetail'>
                <p className='teamname'>Sheikh Khalifa</p>
                <p className='teamjob'>Co-Founder, CEO</p>
                <p className='teamdesc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className='teamicon'>
                  <img src={Icon1} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon2} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                  <img src={Icon3} style={{ width: "10%", height: "10%", objectFit: "contain" }} />
                </div>
              </div>
            </motion.div>


          </div>















          {/* <div className='team'>
                    <div className='t1'>

                    </div>
                    <div className='t2'>

</div>
 <div className='t3'>

</div>
 <div className='t4'>

</div>
 <div className='t5'>

</div>
                </div> */}
        </div>
      </motion.div>
    </>
  )
}

export default Section6