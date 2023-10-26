import "../styles/Section4.css"
import { motion } from "framer-motion"


const Section4 = () => {
    return (
        <>
            <motion.div className="s4main" initial={{ opacity: 0 }} transition={{
                ease: "linear",
                duration: 1,
            }}
                whileInView={{ opacity: 1 }}>
                <div className="s4block">
                    <div className='s3header'>
                        <p className='s3headersmall'>Roadmap</p>
                        <p className='s3header1'>Our Strategy & Project Plan</p>

                    </div>

                    <div className="row">
                        <div className="col">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x:300,
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.2,
                                    
                                }}
                                whileInView={{
                                    opacity: 1,
                                     x:0,
                                }}
                                className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle2"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 1</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">TOKEN LAUNCH</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 2</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">ICO LAUNCH</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 3</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">ISLAMIC APP</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 4</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">DEBIT CARD</p>
                                    </div>
                                </div>

                            </motion.div>


                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x:-300,
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.2,

                                }}
                                whileInView={{
                                    opacity: 1,
                                    x:0,
                                }}
                                className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"> </div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 5</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">NFT MARKETPLACE</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content " data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 6</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">HALAL MARKET CAP</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 7</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">JOB PORTAL</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 8</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">MUSLIM MATRIMONIAL SITE</p>
                                    </div>
                                </div>

                            </motion.div>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 300,
                                }}
                                transition={{
                                    ease: "easeInOut",
                                    duration: 1,
                                    delay: 0.2,

                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 9</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">KUKU FM</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 10</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">OWN BLOCKCHAIN</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="PHASE 1">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 11</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0">METAVERSE AR+VR</p>
                                    </div>
                                </div>
                                <div className="timeline-step">
                                    <div className="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                                        <div className="inner-circle"></div>
                                        <p className="h6 mt-3 mb-1 roadmapsmall">PHASE 12</p>
                                        <p className="h6 roadmaphead mb-0 mb-lg-0"> Tawakkal Zakat & Sadaqa Wallet</p>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    </div>

                </div>
            </motion.div>   </>
    )
}

export default Section4