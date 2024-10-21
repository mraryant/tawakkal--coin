
import '../styles/Section3.css'
import S3img1 from '../assets/s3image1.png'
import S3icon1 from '../assets/s3icon1.png'
import S3img2 from '../assets/s3img2.png'
import S3img3 from '../assets/WhatsApp Video 2023-10-25 at 5.21.33 PM.mp4'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import edu from '../assets/edu.png'
import world from '../assets/world.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import RightArrow from '../assets/right.png'
import { motion } from "framer-motion"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modal2 from 'react-bootstrap/Modal';
import Modal3 from 'react-bootstrap/Modal';
import Modal4 from 'react-bootstrap/Modal';
import Modal5 from 'react-bootstrap/Modal';
import Modal6 from 'react-bootstrap/Modal';
import Modal7 from 'react-bootstrap/Modal';
import Modal8 from 'react-bootstrap/Modal';
import Modal9 from 'react-bootstrap/Modal';
import Modal10 from 'react-bootstrap/Modal';
import Modal11 from 'react-bootstrap/Modal';
import Modal12 from 'react-bootstrap/Modal';
import usecasee4 from '../assets/usecase4.png'

const Section3 = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show6, setShow6] = useState(false);
    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);
    const handleClose7 = () => setShow7(false);
    const handleShow7 = () => setShow7(true);
    const handleClose8 = () => setShow8(false);
    const handleShow8 = () => setShow8(true);
    const handleClose9 = () => setShow9(false);
    const handleShow9 = () => setShow9(true);
    const handleClose10 = () => setShow10(false);
    const handleShow10 = () => setShow10(true);
    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);

    const handleClose12 = () => setShow12(false);
    const handleShow12 = () => setShow12(true);
   
    return (
        <>
            <div className='s3main' id="usecase">
                <div className='s3block'>
                    <motion.div className='s3header' whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} transition={{
                        ease: "linear",
                        duration: 1,
                    }}
                        whileInView={{ opacity: 1 }}>
                        <p className='s3headersmall'>Usecase</p>
                        <p className='s3header1'>Usecase of Tawakkal Coin</p>

                    </motion.div>
                    <motion.div className='s3usecase'
                        initial={{ opacity: 0 }}
                        transition={{ ease: "linear", duration: 1, }} whileInView={{ opacity: 1 }}>
                        <motion.div
                            initial={{
                                scale: 0.9
                            }}
                            transition={{
                                ease: "easeInOut",
                                duration: 4,
                                repeat: Infinity,
                                repeatType: 'reverse',
                            }}
                            whileInView={{
                                scale: 1.2,
                            }}
                            className='s3usecaseleft'>
                            <img src={S3img1} className='s3img1' />
                        </motion.div>

                        
                        <div className='s3usecaseright'>
                            <div className='usecasemain'>
                            {/* #USECASE1 */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={S3icon1} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Islamic App</p>
                                        <p className='ucpara'>The Tawakkal Islamic App is a comprehensive mobile application designed to enrich the daily lives of Muslims and non-Muslims by providing a wide array of features and functionalities that align with Islamic teachings.</p>
                                        <p onClick={handleShow} className='ucbutton'>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>

                                 {/* #USECASE 2 */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p7} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Fi Sabilillah Wallet</p>
                                        <p className='ucpara'>The Fi Sabilillah Wallet is a dedicated digital platform designed to facilitate the proper and transparent distribution of Zakat and Sadaqa, which are essential aspects of Islamic charity and philanthropy. </p>
                                        <p className='ucbutton' onClick={handleShow3}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>

                                 {/* #USECASE 3 */}
                               
                                 <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p3} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Islamic NFTs Marketplace</p>
                                        <p className='ucpara'>Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage.</p>
                                        <p className='ucbutton' onClick={handleShow2}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                               
                            </div>
                        </div>
                    </motion.div>
                    <div className='s3usecase2' >
                        <div
                           
                            className='s3usecaseleft'>
                            <motion.img
                                initial={{
                                    scale: 1.1
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                                whileInView={{
                                    scale: 1.5,
                                }}
                                src={S3img2} className='s3img2' />
                        </div>
                        <motion.div className='s3usecaseright' initial={{ opacity: 0 }} transition={{
                            ease: "linear",
                            duration: 1,
                        }}
                            whileInView={{ opacity: 1 }}>
                            



                            <div className='usecasemain' >


                             {/* #USECASE 4 */}
                               
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p2} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Debit Card: Empowering Ethical Transactions</p>
                                        <p className='ucpara'>Through the Tawakkal Debit Card, we envision a world where financial inclusivity meets ethical standards, empowering individuals to engage with our ecosystem confidently and fostering a community united by shared values.
                                        </p>
                                        <p className='ucbutton' onClick={handleShow4}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                                {/* #USECASE5 */}
                             
                                <motion.div
                                     initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={world} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Halal world: (Halal Tourism + Halal Medicine+ Halal Clothing Halal Audit & Certifications)</p>
                                        <p className='ucpara'><span style={{fontWeight:"bold",fontSize:18}}>Halal Tourism</span>:
Halal tourism, also known as Islamic or Muslim-friendly tourism, is a growing sector of the travel industry that caters to the specific needs and preferences of Muslim travelers. 
<br />
<br />
<span style={{fontWeight:"bold",fontSize:18}}>Halal clothing:</span>

The term "halal" refers to clothing that abides by Islamic moral and modesty laws. Although it serves Muslim customers' needs and preferences, there are still a number of difficulties
<br />
<br />
<span style={{fontWeight:"bold",fontSize:18}}>Halal Medicane:</span>

In terms of health, wellness, and healing, "Tibb-e-Nabawi" refers to conventional Islamic medicine or prophetic medicine that is based on the customs and guidelines of the Prophet Muhammad (peace be upon him). 
</p>
                                        <p className='ucbutton' onClick={handleShow5}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>

                                {/* #USECASE 6 */}
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p4} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div style={{ width: "100%", height: "100%" }}>
                                        <p className='ucheading'>Tawakkal Halal Market Cap</p>
                                        <p className='ucpara'>The Tawakkal Halal Market Cap is a significant platform within the Tawakkal Coin ecosystem, aiming to provide Muslims with a marketplace for Halal (permissible) products.</p>
                                        <p className='ucbutton' onClick={handleShow6}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                               

                               
                            </div>



                        </motion.div>
                    </div>















                    <motion.div className='s3usecase' initial={{ opacity: 0 }} transition={{
                        ease: "linear",
                        duration: 1,
                    }}
                        whileInView={{ opacity: 1 }}>
                        
                        
                        <div className='s3usecaseleft'>
                            <motion.video
                                initial={{
                                    scale: 1
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                                whileInView={{
                                    scale: 1.3,
                                }}
                                src={S3img3} autoPlay loop muted className='s3img3' />
                        </div>

                        <div className='s3usecaseright'>
                            <div className='usecasemain'>

                             {/* #USECASE 7 */}
                             <motion.div
                                   initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={edu} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Education Platform</p>
                                        <p className='ucpara'>The app provides educational resources, including articles and videos, to help users deepen their knowledge of Islam, its history, principles, and practices.
The Tawakkal App goes beyond traditional boundaries, aiming to educate the next generation on cutting-edge technologies. We are committed to imparting knowledge and understanding in crucial domains such as blockchain, cryptocurrency, artificial intelligence, and digital technologies.</p>
                                        <p className='ucbutton' onClick={handleShow7}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                              

                                 {/* #USECASE 8 */}
                                 <motion.div
                                   initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p5} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Muslim Job Portal</p>
                                        <p className='ucpara'>The Tawakkal Muslim Job Portal is an online platform specifically designed to assist Muslims in their professional pursuits.</p>
                                        <p className='ucbutton' onClick={handleShow8}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                               

                                 {/* #USECASE 9 */}
                                 <motion.div
                                  initial={{
                                        opacity: 0,
                                        x: 200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p6} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Muslim Matrimonial Sites</p>
                                        <p className='ucpara'>The Tawakkal Muslim Matrimonial Sites are dedicated platforms designed to assist Muslims in finding compatible life partners.</p>
                                        <p className='ucbutton' onClick={handleShow9}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                              
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='s3usecase2' initial={{ opacity: 0 }} transition={{
                        ease: "linear",
                        duration: 1,
                    }}
                        whileInView={{ opacity: 1 }}>
                        
                        
                        <div className='s3usecaseleft'>
                            <motion.img
                                initial={{
                                    scale: 1
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'reverse',
                                }}
                                whileInView={{
                                    scale: 1.3,
                                }}
                                src={usecasee4}  className='s3img3' />
                        </div>

                        <div className='s3usecaseright'>
                            <div className='usecasemain'>

                             {/* #USECASE 10 */}
                                
                             <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p8} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Platform for Audio Islamic Books </p>
                                        <p className='ucpara'>Each of these additional platforms and features contributes to the holistic Tawakkal ecosystem, enhancing the overall experience for users and fostering a sense of community, knowledge sharing, and financial inclusivity, all aligned with Islamic principles and values.</p>
                                        <p className='ucbutton' onClick={handleShow10}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>
                                 {/* #USECASE 11 */}

                                 <motion.div
                                   initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p9} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Own Blockchain</p>
                                        <p className='ucpara'>Tawakkal Coin, in its relentless pursuit of innovation and alignment with Islamic principles, is embarking on a transformative journey by launching its very own blockchain. This strategic move marks a significant milestone, underscoring our commitment to providing a seamless and Sharia-compliant ecosystem for our community and beyond.</p>
                                        <p className='ucbutton' onClick={handleShow11}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                    </div>

                                </motion.div>

                                 {/* #USECASE 12 */}

                                 <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -200
                                    }}
                                    transition={{
                                        ease: "easeInOut",
                                        duration: 1,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        duration: 20,
                                    }}
                                    className='usecase1'>
                                    <div>
                                        <img src={p10} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Islamic Metaverse</p>
                                        <p className='ucpara'>The Tawakkal Islamic Metaverse is a virtual shared space designed to provide users an immersive and interactive experience, particularly focusing on Islamic education and spirituality.</p>
                                        <p className='ucbutton' onClick={handleShow12}>Learn More <img src={RightArrow} style={{width:20, height:20, marginLeft:10}} alt="" /></p>
                                       
                                    </div>

                                </motion.div>

                                
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
      


{/* USECAE 1 */}
            <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
        <Modal.Body className='modalbody'>
<p>
<img src={S3icon1} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Tawakkal Islamic App
 (Islamic inheritance cal. + nikha nama) </h2> <br />


The Tawakkal Islamic App is a comprehensive mobile application designed to enrich the daily lives of Muslims and non-Muslims by providing a wide array of features and functionalities that align with Islamic teachings. Here's a detailed explanation of its features and functionalities:
<br />
<br />
<p style={{fontWeight:"bold"}}>Features and Functionalities:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Quran with Tafseer:</p>
<p className='modalpara'>The app offers the complete Quran, accompanied by Tafseer (interpretation), providing users with a deeper understanding of the sacred text.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Sahi Satta Hadees:</p>
<p className='modalpara'>It provides access to the authentic Hadith (sayings and actions) of Prophet Muhammad (PBUH), enabling users to follow his teachings.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Islamic Inheritance Calculator:</p>
<p className='modalpara'>This feature assists users in understanding and calculating the distribution of inheritance shares according to Islamic laws, promoting fair and just inheritance practices.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Nikahnama Copy Download:</p>
<p className='modalpara'>Users can download the Nikahnama, the Islamic marriage contract, an essential document in Islamic marriages, promoting transparency and legal compliance.</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Masjid Locator and Qibla Finder:</p>
<p className='modalpara'>Helps users locate nearby mosques and accurately determine the Qibla (direction of Mecca) for their prayers.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Duas and Alarms for Prayers:</p>
<p className='modalpara'>Provides a collection of Duas (prayers) for various occasions and includes alarms and notifications for the five daily prayers, ensuring timely prayer observance.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Islamic Knowledge Content:</p>
<p className='modalpara'>Curates a variety of educational content, including articles, videos, and other resources that help users enhance their knowledge and understanding of Islam.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Extra Sunnah Prayers Reminder:</p>
<p className='modalpara'>Offers reminders for additional Sunnah prayers, promoting regular engagement in optional prayers and strengthening one's connection with Allah.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Auto Location System and Time Adjustment:</p>
<p className='modalpara'>Automatically adjusts prayer times and Qibla direction based on the user's location, ensuring 
accurate prayer scheduling.
</p>
<Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
</Modal.Body>
       
      </Modal>
 {/* USECAE 2 DONE*/}

      <Modal2 show={show2} onHide={handleClose2} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal2.Body className='modalbody'>
        <p>
        <img src={p3} style={{ width: 50, height: 50, marginRight: 5 }} />
        </p>
       <h2 style={{overflow:"visible"}}>Tawakkal Islamic NFTs Marketplace
</h2> <br />
Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage. Here's an in-depth explanation of their definition and purpose:

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>Non-Fungible Tokens (NFTs):</p>
<p className='modalpara'>NFTs are cryptographic assets that represent ownership of a unique item or piece of content on a blockchain, a decentralized and secure digital ledger.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Islamic Themes and Heritage:</p>
<p className='modalpara'>Tawakkal Islamic NFTs focus on digital assets related to Islamic culture, art, texts, and historical artefacts. These NFTs encapsulate the essence of Islamic heritage and are securely stored and traded on the blockchain.

</p>

<p style={{fontWeight:"bold"}}>Purpose:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Preservation and Digitization:</p>
<p className='modalpara'>Tawakkal Islamic NFTs serve to preserve and digitize precious Islamic texts, artworks, and cultural artefacts. By creating digital representations, these assets can be accessed and appreciated globally, aiding in the conservation of Islamic heritage.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Authenticity and Ownership:</p>
<p className='modalpara'>NFTs provide a way to establish authenticity and ownership of unique digital or physical items related to Islamic culture. The blockchain's immutability ensures that the ownership record is secure and tamper-proof.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Showcasing Islamic Art and Texts:</p>
<p className='modalpara'>This feature assists users in understanding and calculating the distribution of inheritance shares according to Islamic laws, promoting fair and just inheritance practices.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Nikahnama Copy Download:</p>
<p className='modalpara'>Users can download the Nikahnama, the Islamic marriage contract, an essential document in Islamic marriages, promoting transparency and legal compliance.</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Masjid Locator and Qibla Finder:</p>
<p className='modalpara'>Tawakkal Islamic NFTs showcase Islamic art, texts, and cultural heritage, allowing collectors and enthusiasts to appreciate and own digital versions of masterpieces and significant texts.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Educational Value:</p>
<p className='modalpara'>Tawakkal Islamic NFTs can have educational value by providing insights into Islamic history, art, and culture. They can be accompanied by informational content, enriching the understanding of Islam.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Global Exposure:</p>
<p className='modalpara'>Through the use of NFTs, Islamic culture and heritage gain global exposure. Collectors and admirers worldwide can access and appreciate these digital assets, fostering a greater understanding and appreciation of Islamic heritage.</p>

<p style={{fontWeight:"bold"}}>Partnership with the Sufi Organisations:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Collaboration and Promotion:</p>
<p className='modalpara'>Tawakkal Coin's partnership with the Sufi Organisations enhances the promotion and distribution of NFTs related to Sufi texts, artworks, and cultural elements. This collaboration elevates the representation of Sufism in the digital realm.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Cultural Exchange:</p>
<p className='modalpara'>The partnership facilitates a cultural exchange by introducing Sufi texts and art to a broader audience, promoting a deeper understanding of Sufism and its significance within the Islamic culture.

</p>
<Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
</Modal2.Body>
       
      </Modal2>

      {/* USECAE 3 DONE */}

      <Modal3 show={show3} onHide={handleClose3} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal3.Body className='modalbody'>
<p>
<img src={p7} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>

       <h2 style={{overflow:"visible"}}>Tawakkal Fi Sabilillah Wallet
</h2> <br />

The Fi Sabilillah Wallet is a dedicated digital platform designed to facilitate the proper and transparent distribution of Zakat and Sadaqa, which are essential aspects of Islamic charity and philanthropy. Here's an explanation of its functionality and purpose:


The Tawakkal Islamic App is a comprehensive mobile application designed to enrich the daily lives of Muslims and non-Muslims by providing a wide array of features and functionalities that align with Islamic teachings. Here's a detailed explanation of its features and functionalities:
<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>•	Zakat and Sadaqa Donations: </p>
<p className='modalpara'>The primary function of the wallet is to enable users to make donations of Zakat (mandatory almsgiving) and Sadaqa (voluntary charity) securely and transparently. Users can contribute their wealth to various charitable causes within the Islamic framework.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Donation Options: </p>
<p className='modalpara'>The wallet provides a structured list of causes and categories for both Zakat and Sadaqa donations. Users can select from these options to specify where their contributions should be allocated. This ensures that donations are directed to the intended recipients and purposes in accordance with Islamic principles.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Digital Verification: </p>
<p className='modalpara'>One of the key features of the Fi Sabilillah Wallet is its digital verification system. This mechanism ensures that the donations made through the platform are digitally verified, transparent, and accountable. Users can have confidence that their contributions are being channelled to the right beneficiaries and are being used for their intended purpose, which is a fundamental aspect of Islamic charity.</p>

<p style={{fontWeight:"bold"}}>Donation Options and Their Impact:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Zakat:</p>
<p className='modalpara'>The Fi Sabilillah Wallet supports eight specific categories of recipients as outlined in Islamic teachings for Zakat distribution. These categories are:


•	Poor People (Fuqara)
•	Needy People (Masakeen)
•	Zakat Collector (Aamileen)
•	Those Who have a Reconciliation of Heart (Muallaf Tul Quloob)
•	To Free those in Bondage (Ar-Riqaab)
•	The Debt-Ridden (Al Ghaarimeen)
•	For the Cause of God (Fi Sabeelillah)
•	Wayfarer
</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Sadaqa:</p>
<p className='modalpara'>Sadaqa donations made through the Fi Sabilillah Wallet are used for various charitable purposes, including but not limited to:

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Education Programs:</p>
<p className='modalpara'>Supporting educational initiatives and madrasa upliftment programs to help students from madrasas integrate into mainstream education.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Healthcare for the Needy:</p>
<p className='modalpara'>Assisting individuals who are hospitalized and unable to bear medical expenses.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Community Kitchens (Roti Banks): </p>
<p className='modalpara'>Providing food and meals to those in need.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Community Kitchens (Roti Banks): </p>
<p className='modalpara'>Raising funds to provide safe drinking water in underdeveloped regions.
</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Disaster Relief:  </p>
<p className='modalpara'>Mobilizing resources to respond to calamities such as earthquakes, floods, and other emergencies.
</p>
<Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
</Modal3.Body>
       
      </Modal3>



      {/* USECAE 4 DONE */}
 <Modal4 show={show4} onHide={handleClose4} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal4.Body className='modalbody'>
<p>
<img src={p2} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Tawakkal Debit Card: Empowering Ethical Transactions
</h2> <br />

<p style={{fontWeight:"bold" , fontSize:22}}>•	Convenient Transactions:</p>
<p className='modalpara'>Tawakkal Coin proudly introduces the Tawakkal-branded debit card, offering users a seamless and convenient way to transact within the Tawakkal ecosystem and at affiliated Halal businesses. With this specialized debit card, individuals can navigate their financial activities effortlessly, ensuring a smooth experience in line with their values and beliefs.<br />
</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Convenient Transactions:</p>
<p className='modalpara'>One of our primary goals is to facilitate financial inclusion within the Tawakkal ecosystem, aligning every transaction with the principles of Sharia. The Tawakkal Debit Card plays a vital role in achieving this objective by promoting accessible and ethical financial transactions. By adhering to Sharia principles, we ensure that every user, regardless of their background or beliefs, can participate and benefit from our ecosystem.
<br />
Through the Tawakkal Debit Card, we envision a world where financial inclusivity meets ethical standards, empowering individuals to engage with our ecosystem confidently and fostering a community united by shared values.
<br />
</p>
<br />
<Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
</Modal4.Body>
       
      </Modal4>


      {/* USECAE 5 DONE*/}
      <Modal5 show={show5} onHide={handleClose5} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal5.Body className='modalbody'>
<p>
<img src={world} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Halal world: (Halal Tourism + Halal Medicine+ Halal Clothing Halal Audit & Certifications)
</h2> <br />

<p style={{fontWeight:"bold" , fontSize:22}}>•	Halal Tourism:</p>
<p className='modalpara'>
Halal tourism, also known as Islamic or Muslim-friendly tourism, is a growing sector of the travel industry that caters to the specific needs and preferences of Muslim travelers. While it presents various opportunities for economic growth and cultural exchange, it also faces certain challenges and issues.<br /><br /> Our focus for providing halal tourism shall be as follows:
<br />1.	Accommodation and Halal Food<br />
2.	Prayer Facilities<br />
3.	Cultural Sensitivity<br />
4.	Alcohol free and islamic Entertainment<br />
5.	Halal Certification<br />
6.	Security Concerns<br />
7.	Cultural Experiences<br />

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Halal clothing:</p>
<p className='modalpara'>
The term "halal" refers to clothing that abides by Islamic moral and modesty laws. Although it serves Muslim customers' needs and preferences, there are still a number of difficulties. Here are a few of the major issues facing the halal clothing sector.
Despite these challengeschallenges, the halal clothing market is expanding due to increasing acknowledge for the need for modest and ethical clothing. In order to overcome these obstacles, brands must uphold their moral and religious values, make investments in environmentally friendly and accountable business practises, and inform customers about the advantages of wearing halal clothing. Additionally, certifications and industry standards can help give customers more assurance regarding the legitimacy of halal clothing products
<br />
<br />
•	Fashion and design based on Islamic principles<br />
•	Diversity of Culture<br />
•	Sizing and Fit as per Islamic permissions<br />
•	Material Selection<br />
•	Best Pricing<br />
•	Sustainability<br />
•	Consumer Education <br />
•	Market Competition<br />
•	Global Supply Chain<br />
•	Regulation and Certification<br />

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Halal Medicane:</p>
<p className='modalpara'>
In terms of health, wellness, and healing, "Tibb-e-Nabawi" refers to conventional Islamic medicine or prophetic medicine that is based on the customs and guidelines of the Prophet Muhammad (peace be upon him). It includes a multifaceted view of health that emphasises a person's physical, mental, and spiritual well-being. Tibb-e-Nabawi's salient features include the following:
<br />
<br />
1. Using organic remedies<br />
2. Dietary Recommendations<br />
3. Cleanliness and hygiene<br />
4. Spirituality and prayer<br />
5. Using cups (Hijama)<br />
6. Physical exercise and activity<br />
7. Fasting <br />
8. Mental Health<br />
9. Herbal remedies<br />


</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Halal Audit & Certification:</p>
<p className='modalpara'>
Halal Audits & Certification are related to Food, Cosmetics, Tourism, Clothing Etc. Tawakkal will work in taking rights to issue halal certifications & Audit with a seal from Tawakkal Sharia Committee
</p>


<Button variant="secondary" onClick={handleClose5}>
            Close
          </Button>
</Modal5.Body>
       
      </Modal5>


      {/* USECAE 6 */}

      <Modal6 show={show6} onHide={handleClose6} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal6.Body className='modalbody'>
<p>
<img src={p4} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>  
     <h2 style={{overflow:"visible"}}>Tawakkal Halal Market Cap
</h2> <br />
Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage. Here's an in-depth explanation of their definition and purpose:

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>Overview and Alignment with Islamic Principles:</p>
<p className='modalpara'>The Tawakkal Halal Market Cap is a significant platform within the Tawakkal Coin ecosystem, aiming to provide Muslims with a marketplace for Halal (permissible) products. Here's a detailed explanation of its overview and how it aligns with Islamic principles:
Marketplace for Halal Products: Tawakkal Halal Market Cap functions as an online marketplace where users can explore, purchase, and trade a wide range of products that are certified as Halal. This includes items such as food, cosmetics, clothing, and other consumer goods, ensuring compliance with Islamic dietary and ethical guidelines.

User-Friendly Interface: The platform offers an intuitive and user-friendly interface that allows users to browse products, compare prices, and make informed choices. It simplifies the process of finding Halal products in one centralized location.

</p>



<p style={{fontWeight:"bold"}}>How it aligns with Islamic principles:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Halal Compliance:</p>
<p className='modalpara'>The Tawakkal Halal Market Cap ensures that all products listed on the platform comply with Halal standards as defined by Islamic law. This alignment with Halal principles ensures that the offerings meet the requirements of permissible consumption for Muslims.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Ethical Transactions: </p>
<p className='modalpara'>In line with Islamic principles of honesty, fairness, and ethical trade, the platform promotes transactions that adhere to Sharia guidelines. All transactions within the Halal marketplace prioritize fair dealing and transparent practices.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Consumer Assurance: </p>
<p className='modalpara'>By providing a designated space for Halal products, the platform offers assurance to consumers regarding the authenticity and compliance of the products they purchase. This is vital for Muslims seeking to adhere to Halal dietary and lifestyle practices.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Fostering Halal Industry: </p>
<p className='modalpara'>Tawakkal Halal Market Cap plays a role in fostering and supporting the Halal industry. By promoting Halal products and businesses, the platform contributes to the growth and sustainability of businesses that align with Islamic values.</p>
<Button variant="secondary" onClick={handleClose6}>
            Close
          </Button>
</Modal6.Body>
       
      </Modal6>


      {/* USECAE 7 */}

      <Modal7 show={show7} onHide={handleClose7} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal7.Body className='modalbody'>
<p>
<img src={edu} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>

       <h2 style={{overflow:"visible"}}>Tawakkal Islamic NFTs Marketplace
</h2> <br />
The app provides educational resources, including articles and videos, to help users deepen their knowledge of Islam, its history, principles, and practices.
Innovative Technology Education
<br />
<br />
The Tawakkal App goes beyond traditional boundaries, aiming to educate the next generation on cutting-edge technologies. We are committed to imparting knowledge and understanding in crucial domains such as blockchain, cryptocurrency, artificial intelligence, and digital technologies. Our goal is to demystify these complex subjects and make them accessible, ensuring the youth are prepared for the tech-driven future Skill Development for Tomorrow's Leaders
<br />
<br />
The Tawakkal App doubles as a skill development hub, equipping users with practical skills that are essential for personal and professional growth. We focus on cultivating a range of skills, from critical thinking and problem-solving to communication and collaboration. By providing comprehensive learning modules and interactive experiences, we empower individuals to become adept leaders and innovators in a rapidly evolving world. 

<br />
<br />


<p style={{fontWeight:"bold" , fontSize:22}}>•	Bridging the Knowledge Gap:</p>
<p className='modalpara'>
We recognize the existing knowledge gap in emerging technologies. The Tawakkal App addresses this gap by providing well-curated content, expert insights, and engaging tutorials, fostering a generation that is well-versed in new-age technologies. Our aim is to bridge the digital divide and ensure no one is left behind in this era of rapid technological advancements. 

<br />
<br />
The Tawakkal Islamic App serves as a valuable resource for both Muslims and non-Muslims, aiding in spiritual growth, providing access to essential religious teachings, and fostering a deeper connection with Islamic beliefs and practices in the modern world.
<br />
<br />
Tawakkal will launch below mentioned skill development courses to address this issue. We'll be developing online education platforms for these programmes to make it straightforward and more widely 
<br /><br />1.	Technical and IT Skills<br />
2.	Soft Skills and Professional Development<br />
3.	Language Skills<br />
4.	Health and Wellness<br />
5.	Entrepreneurship and Business Skills<br />
6.	Personal Development and Lifestyle Skills<br />
7.	Trades and Vocational Skills<br /><br />

Madrasa upliftment program.<br />
With the help of this project, underprivileged madrasa students will be given opportunities to succeed in mainstream society. Above program's concept will give them opportunities in other areas of life as well as boost their confidence.
<br />
<br />
Courses in Physical Education (with a focus on developing future generation cricketers)
Creating Cricket Academies & giving opportunities to young cricketers to follow their heros like Sachin, Mcgrath, Vivian Richards, Wasim Akram & MS Dhoni.

</p>

<Button variant="secondary" onClick={handleClose7}>
            Close
          </Button>
</Modal7.Body>
       
      </Modal7>


      {/* USECAE 8 */}

      <Modal8 show={show8} onHide={handleClose8} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal8.Body className='modalbody'>
       <p>
       <img src={p5} style={{ width: 50, height: 50, marginRight: 5 }} />

       </p>
       <h2 style={{overflow:"visible"}}>Tawakkal Muslim Job Portal
</h2> <br />

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>How the Portal Assists Muslims in the Professional Field:</p>
<p className='modalpara'>The Tawakkal Muslim Job Portal is an online platform specifically designed to assist Muslims in their professional pursuits. Here's a comprehensive explanation of how the portal aids individuals in the professional field</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Job Listings and Opportunities:</p>
<p className='modalpara'>Tawakkal Islamic NFTs focus on digital assets related to Islamic culture, art, texts, and historical artefacts. These NFTs encapsulate the essence of Islamic heritage and are securely stored and traded on the blockchain.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Job Listings:</p>
<p className='modalpara'>The portal hosts a diverse array of job listings from various industries and sectors, catering to the skills and interests of Muslims seeking employment.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Filtered Search:</p>
<p className='modalpara'>Job seekers can easily filter job listings based on their qualifications, experience, location preferences, and industry, streamlining the job search process and presenting relevant opportunities.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Job Seeker Profiles:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Profile Creation:</p>
<p className='modalpara'>Users can create detailed profiles, showcasing their skills, qualifications, work experience, and accomplishments. A well-constructed profile increases visibility to potential employers.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Resume Upload:</p>
<p className='modalpara'>Job seekers can upload their resumes, allowing prospective employers to review their qualifications and consider them for suitable job openings.</p>

<p style={{fontWeight:"bold"}}>Airdrop Mechanism for Job Seekers:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Incentivizing Job Seekers:</p>
<p className='modalpara'>The Tawakkal Muslim Job Portal incentivizes job seekers by offering airdrops of Tawakkal Coin for successfully securing a job through the platform. This encourages active participation and engagement on the portal.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Reward for Professional Growth:</p>
<p className='modalpara'>The airdrop mechanism serves as a reward for job seekers' dedication to enhancing their careers, and promoting growth within the professional field.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Encouraging Platform Usage:</p>
<p className='modalpara'>By providing a tangible incentive, the portal encourages job seekers to utilize the platform actively, creating a mutually beneficial ecosystem for both job seekers and employers.</p>

<p style={{fontWeight:"bold"}}>Promoting Community Support:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Community Feedback and Reviews:</p>
<p className='modalpara'>The portal allows job seekers to share their experiences with prospective employers through feedback and reviews. This feature fosters a sense of community and collective support, aiding other job seekers in making informed decisions.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Community Engagement:</p>
<p className='modalpara'>Through forums, discussion groups, and networking events, the portal encourages community engagement and collaboration, providing a platform for knowledge sharing and professional growth.

</p>
<Button variant="secondary" onClick={handleClose8}>
            Close
          </Button>
</Modal8.Body>
       
      </Modal8>


      {/* USECAE 9 */}

      <Modal9 show={show9} onHide={handleClose9} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal9.Body className='modalbody'>
<p>
<img src={p6} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Tawakkal Muslim Matrimonial Sites
</h2> <br />
Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage. Here's an in-depth explanation of their definition and purpose:

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>Functionality and Purpose:</p>
<p className='modalpara'>The Tawakkal Muslim Matrimonial Sites are dedicated platforms designed to assist Muslims in finding compatible life partners. Here's a detailed explanation of their functionality and purpose</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Islamic Themes and Heritage:</p>
<p className='modalpara'>Tawakkal Islamic NFTs focus on digital assets related to Islamic culture, art, texts, and historical artefacts. These NFTs encapsulate the essence of Islamic heritage and are securely stored and traded on the blockchain.

</p>

<p style={{fontWeight:"bold"}}>Functionality:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Profile Creation:</p>
<p className='modalpara'>Tawakkal Islamic NFTs serve to preserve and digitize precious Islamic texts, artworks, and cultural artefacts. By creating digital representations, these assets can be accessed and appreciated globally, aiding in the conservation of Islamic heritage.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Matching Algorithms:</p>
<p className='modalpara'>NFTs provide a way to establish authenticity and ownership of unique digital or physical items related to Islamic culture. The blockchain's immutability ensures that the ownership record is secure and tamper-proof.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Secure Communication:</p>
<p className='modalpara'>This feature assists users in understanding and calculating the distribution of inheritance shares according to Islamic laws, promoting fair and just inheritance practices.</p>


<p style={{fontWeight:"bold"}}>Purpose:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Facilitating Marriage:</p>
<p className='modalpara'>The primary purpose of the Tawakkal Muslim Matrimonial Sites is to facilitate the institution of marriage in the Muslim community. The platforms aim to help individuals find suitable partners to establish a committed and lifelong relationship based on Islamic principles.</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Promoting Compatibility:</p>
<p className='modalpara'>By leveraging matching algorithms, the platforms strive to enhance the likelihood of compatibility and successful relationships by connecting individuals with shared values, beliefs, and lifestyles.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Upholding Islamic Values:</p>
<p className='modalpara'>The platforms emphasize adherence to Islamic ethics and values, ensuring that the search for a life partner aligns with the teachings of Islam. This includes respect, honesty, and a commitment to family and community.

</p>


<p style={{fontWeight:"bold"}}>Incentives for Using the Platform:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Incentives for Using the Platform:</p>
<p className='modalpara'>The Tawakkal Muslim Matrimonial Sites provide a safe and targeted platform for individuals to seek a life partner within the Islamic faith. This addresses the concerns of finding a compatible partner who shares similar values and beliefs.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Efficient Matchmaking:</p>
<p className='modalpara'>The platforms optimize the matchmaking process, saving users time and effort in finding potential partners who meet their preferences and criteria.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Community and Family Harmony:</p>
<p className='modalpara'>Facilitating marriages through these platforms contributes to community and family harmony by ensuring that individuals find partners with whom they can build strong, united families.

</p>
<Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
</Modal9.Body>
       
      </Modal9>


      {/* USECAE 10 */}

      <Modal10 show={show10} onHide={handleClose10} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal10.Body className='modalbody'>
<p>
<img src={p8} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Tawakkal Platform for Audio Islamic Books 
</h2> <br />
Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage. Here's an in-depth explanation of their definition and purpose:

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>Audio Learning:</p>
<p className='modalpara'>An audio platform where users can access a wide range of Islamic books and content in an auditory format.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Convenience and Accessibility:</p>
<p className='modalpara'>Allows users to consume Islamic knowledge while on the go, making learning more accessible and convenient..

</p>
<Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
</Modal10.Body>
       
      </Modal10>


      {/* USECAE 11 */}

      <Modal11 show={show11} onHide={handleClose11} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal11.Body className='modalbody'>
<p>
<img src={p9} style={{ width: 50, height: 50, marginRight: 5 }} />

</p>
       <h2 style={{overflow:"visible"}}>Launching Our Own Blockchain
</h2> <br />
Tawakkal Coin, in its relentless pursuit of innovation and alignment with Islamic principles, is embarking on a transformative journey by launching its very own blockchain. This strategic move marks a significant milestone, underscoring our commitment to providing a seamless and Sharia-compliant ecosystem for our community and beyond.
<br />
<br />

<p style={{fontWeight:"bold" , fontSize:22}}>•	The Essence of a Blockchain:</p>
<p className='modalpara'>A blockchain is a decentralized and distributed digital ledger that records transactions across multiple computers in a secure and transparent manner. It operates on a peer-to-peer network, ensuring that each transaction is cryptographically secured and cannot be altered retroactively. The decentralized nature of blockchain technology eliminates the need for intermediaries, enhancing security, transparency, and efficiency.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Empowering the Tawakkal Ecosystem:</p>
<p className='modalpara'>By launching our own blockchain, we are embracing a self-sustained ecosystem. This blockchain will serve as the backbone of our operations, enabling secure and swift transactions within the Tawakkal ecosystem. It will provide the infrastructure needed to expand our services, enhance security measures, and accommodate a growing community of users.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Sharia-Compliance at the Core:</p>
<p className='modalpara'>A fundamental aspect of our blockchain development is ensuring it aligns impeccably with Islamic finance principles. Transactions within our blockchain will be structured to comply with Sharia law, adhering to the ethical and transparent financial standards set by the Islamic faith. This commitment reaffirms our dedication to offering an ecosystem that respects and upholds the values of our community.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Advancing Technological Frontiers:</p>
<p className='modalpara'>Our blockchain will integrate state-of-the-art technology, incorporating features that boost scalability, security, and decentralization. By leveraging advancements in blockchain technology, we aim to revolutionize the way transactions are conducted and recorded, fostering a reliable and efficient platform for our users.</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Fostering Community Participation:</p>
<p className='modalpara'>The launch of our own blockchain is not only a technical advancement but also an invitation to our community to actively participate in our ecosystem. Through this blockchain, we will introduce governance mechanisms that allow our users to have a say in the evolution of Tawakkal Coin, ensuring a truly decentralized and community-driven ecosystem.

</p>
<Button variant="secondary" onClick={handleClose11}>
            Close
          </Button>
</Modal11.Body>
       
      </Modal11>


      {/* USECAE 12 */}

      <Modal12 show={show12} onHide={handleClose12} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className='mainmodal'
      >
      
     
        <Modal12.Body className='modalbody'>
        <p><img src={p10} style={{ width: 50, height: 50, marginRight: 5 }} /></p>
       <h2 style={{overflow:"visible"}}>Tawakkal Islamic Metaverse
</h2> <br />
Tawakkal Islamic NFTs (Non-Fungible Tokens) are unique digital assets built on blockchain technology, representing ownership or proof of authenticity for digital or physical items related to Islamic themes and heritage. Here's an in-depth explanation of their definition and purpose:

<br />
<br />
<p style={{fontWeight:"bold" , fontSize:22}}>Concept and Features:</p>
<p className='modalpara'>The Tawakkal Islamic Metaverse is a virtual shared space designed to provide users an immersive and interactive experience, particularly focusing on Islamic education and spirituality. Here's a detailed explanation of its concept and features:</p>

<p style={{fontWeight:"bold" , fontSize:22}}>Concept:</p>
<p className='modalpara'>Virtual Shared Space: The concept centres around a virtual environment where users can interact with one another and digital objects, immersing themselves in an experience that simulates the real world.
<br />
Islamic Theme and Purpose: The Tawakkal Islamic Metaverse is tailored to have an Islamic theme, with a specific focus on promoting Islamic education, spirituality, and cultural understanding. Users can engage with Islamic teachings, practices, and historical and cultural aspects within this virtual space.


</p>

<p style={{fontWeight:"bold"}}>Features:</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Masjid Tours:</p>
<p className='modalpara'>Experience guided virtual tours of significant mosques, providing insights into their architecture, history, and spiritual significance.</p>
<p style={{fontWeight:"bold" , fontSize:22}}>•	Darsgah and Khangah:</p>
<p className='modalpara'>Immerse yourself in the world of Islamic education and mysticism, with interactive spaces dedicated to knowledge sharing and spiritual growth.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Educational Value:</p>
<p className='modalpara'>Tawakkal Islamic NFTs can have educational value by providing insights into Islamic history, art, and culture. They can be accompanied by informational content, enriching the understanding of Islam.

</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Visualizing Sufism:</p>
<p className='modalpara'>Journey through the mystical world of Sufism, understanding its profound teachings and practices through engaging visuals and narratives.</p>


<p style={{fontWeight:"bold" , fontSize:22}}>•	Tasawwuf Exploration:</p>
<p className='modalpara'>Delve deep into the spiritual dimensions of Islam, exploring various aspects of Tasawwuf and its role in Islamic spirituality.</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Our Vision:</p>
<p className='modalpara'>We envision a metaverse that not only entertains but also educates and enlightens. The Tawakkal Coin AR & VR Metaverse is a reflection of our commitment to enriching lives through technology while staying true to Islamic principles.

</p>
<p style={{fontWeight:"bold"}}>Tawakkal Coin AR & VR Metaverse: A Glimpse into the Future</p>

<p style={{fontWeight:"bold" , fontSize:22}}>•	Explore the Islamic Metaverse Like Never Before:</p>
<p className='modalpara'>This feature assists users in understanding and calculating the distribution of inheritance shares according to Islamic laws, promoting fair and just inheritance practices.</p>




<Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
</Modal12.Body>
       
      </Modal12>


        </>
    )
}

export default Section3