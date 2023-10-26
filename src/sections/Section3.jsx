
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
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import { motion } from "framer-motion"

const Section3 = () => {

    return (
        <>
            <div className='s3main'>
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
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p2} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Debit Card: Empowering Ethical Transactions</p>
                                        <p className='ucpara'>Through the Tawakkal Debit Card, we envision a world where financial inclusivity meets ethical standards, empowering individuals to engage with our ecosystem confidently and fostering a community united by shared values.
                                        </p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>
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
                                        <p className='ucbutton'>Learn More ^</p>
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
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p5} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Muslim Job Portal</p>
                                        <p className='ucpara'>The Tawakkal Muslim Job Portal is an online platform specifically designed to assist Muslims in their professional pursuits.</p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p6} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Muslim Matrimonial Sites</p>
                                        <p className='ucpara'>The Tawakkal Muslim Matrimonial Sites are dedicated platforms designed to assist Muslims in finding compatible life partners.</p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p7} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Zakat & Sadaqa Wallet</p>
                                        <p className='ucpara'>The Tawakkal Zakat & Sadaqa Wallet is a dedicated digital platform designed to facilitate the proper and transparent distribution of Zakat and Sadaqa, which are essential aspects of Islamic charity and philanthropy.</p>
                                        <p className='ucbutton'>Learn More ^</p>
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
                                        <img src={p8} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal KukuFm Platform for Audio Islamic Books</p>
                                        <p className='ucpara'>Each of these additional platforms and features contributes to the holistic Tawakkal ecosystem, enhancing the overall experience for users and fostering a sense of community, knowledge sharing, and financial inclusivity, all aligned with Islamic principles and values.</p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p9} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Coin s Venture into Self-Sustained Growth: Launching Our Own Blockchain</p>
                                        <p className='ucpara'>Tawakkal Coin, in its relentless pursuit of innovation and alignment with Islamic principles, is embarking on a transformative journey by launching its very own blockchain. This strategic move marks a significant milestone, underscoring our commitment to providing a seamless and Sharia-compliant ecosystem for our community and beyond.</p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>

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
                                        <img src={p10} style={{ width: 50, height: 50, marginRight: 5 }} />
                                    </div>
                                    <div>
                                        <p className='ucheading'>Tawakkal Islamic Metaverse</p>
                                        <p className='ucpara'>The Tawakkal Islamic Metaverse is a virtual shared space designed to provide users an immersive and interactive experience, particularly focusing on Islamic education and spirituality.</p>
                                        <p className='ucbutton'>Learn More ^</p>
                                    </div>

                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </>
    )
}

export default Section3