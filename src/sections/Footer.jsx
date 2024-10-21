
import '../styles/Footer.css'
import social1 from '../assets/social1.png'

import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import social4 from '../assets/social4.png'
import social5 from '../assets/discord.png'
const Footer = () => {
	return (
		<>
			<div className="fmain">
				<footer className="footer-02" >
					<div className="container" style={{ paddingTop: 73 }}>

						<div className="row">
							<div className="col-md-4 col-lg-5" >
								<div className="row">
									<div className="col-md-12 col-lg-8 mb-md-0 mb-4">
										<h2 className="footer-heading">Tawakkal Coin</h2>
										<p>At Tawakkal Coin, we're redefining the future of finance while staying true to our ethical roots. Our ecosystem merges cutting-edge technology with the principles of Sharia to create a dynamic platform that caters not just to Muslims but to people of all backgrounds. </p>

									</div>

								</div>
							</div>
							<div className="col-md-8 col-lg-7">
								<div className="row">
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Quick Links</h2>
										<ul className="list-unstyled">

											<li><a  href="#about" style={{ textDecoration: 'none' }} className="py-1 d-block">About</a></li>
											<li><a  href="#roadmap" style={{ textDecoration: 'none' }} className="py-1 d-block">Roadmap</a></li>
											<li><a  href="#tokenomics" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokenomics</a></li>
											<li><a  href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Whitepaper</a></li>
											<li><a  href="#usecase" style={{ textDecoration: 'none' }} className="py-1 d-block">Usecase</a></li>
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">About</h2>
										<ul className="list-unstyled">
											<li><a  href="https://presale.twkl.io/" style={{ textDecoration: 'none' }} className="py-1 d-block">Tokens</a></li>
											<li><a  href="#team" style={{ textDecoration: 'none' }} className="py-1 d-block">Staff</a></li>
											<li><a  href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Location</a></li>
											
											<li><a  href="#!" style={{ textDecoration: 'none' }} className="py-1 d-block">Blog</a></li>
										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Privacy</h2>
										<ul className="list-unstyled">
											<li><a  href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Terms and condition</a></li>
											<li><a  href="#" style={{ textDecoration: 'none' }} className="py-1 d-block">Privacy Policy</a></li>

										</ul>
									</div>
									<div className="col-md-3 mb-md-0 mb-4 border-left">
										<h2 className="footer-heading">Social</h2>
										<ul className="list-unstyled">
											<li><a target='blank'  href="https://www.facebook.com/profile.php?id=61553002205549" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social1} alt=""  style={{width:30, marginRight:5, height:30}}/>Facebook</a></li>
											<li><a target='blank' href="https://www.instagram.com/tawakkal_coin23/" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social2} alt=""  style={{width:30, marginRight:5, height:30}} />Instagram</a></li>
											<li><a target='blank' href="https://www.youtube.com/channel/UC2eetThnAlGCCk8OO12dVTQ" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social3} alt=""  style={{width:30, marginRight:5, height:30}} />Youtube</a></li>
											<li><a target='blank' href="https://x.com/twklcoin" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social4} alt=""  style={{width:30, marginRight:5, height:30}} />X</a></li>
											<li><a target='blank' href="https://discord.com/invite/MkgH9PVX" style={{ textDecoration: 'none' }} className="py-1 d-block"><img src={social5} alt=""  style={{width:30, marginRight:5, height:30}} />Discord</a></li>
											
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row mt-5">
							<div className="col-md-6 col-lg-8">


							</div>

						</div>
					</div>
				</footer>
			</div>

		</>
	)
}

export default Footer