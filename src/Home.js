/** @format */

import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { Navbar } from 'react-bootstrap';
import './css/style.css';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: '',
		};
	}

	handleChange = (e) => this.setState({ url: e.target.value });

	join = () => {
		if (this.state.url !== '') {
			var url = this.state.url.split('/');
			window.location.href = `/${url[url.length - 1]}`;
		} else {
			var url = Math.random().toString(36).substring(2, 7);
			window.location.href = `/${url}`;
		}
	};

	render() {
		return (
			<body>
				<div className='is-boxed has-animations'>
					<div className='body-wrap boxed-container'>
						<main>
							<div
								className='site-header-inner '
								style={{
									background: '#D5DDFD',
								}}>
								<div className='brand header-brand'>
									<Navbar>
										<Navbar.Brand>
											<img
												style={{ height: '120px' }}
												className='header-logo-image asset-light'
												src='https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/130222781_482227052758916_5860133255541186919_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=uMlBtZ2bGVgAX-jhly6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=5fa3e74b4b768577910b484b16bbc272&oe=5FF1F61C'
												alt='Logo'></img>
										</Navbar.Brand>
									</Navbar>
								</div>
							</div>
							<section className='hero'>
								<div className='container'>
									<div className='hero-inner'>
										<div className='hero-copy'>
											<h1
												className='hero-title mt-0'
												style={{ fontSize: '50px' }}>
												Dating is now on videocall
											</h1>
											<br></br>
											<p className='hero-paragraph'>
												Now with dating while distancing on most singles’ minds,
												doing a <b>VIDEO CALL DATE</b> before deciding to meet
												someone is the new norm and this app is the place for
												that.
											</p>
											<br></br>
											<h4 className='hero-title mt-0'>
												{' '}
												The perfect date is only one click away from you and the
												person you want to date{' '}
											</h4>
											<Button
												class='button button-primary'
												style={{ fontSize: '20px' }}
												onClick={this.join}>
												Go on the date already
											</Button>
											<br></br>
											<br></br>
											<br></br>
										</div>
										<div className='hero-media'>
											<div className='header-illustration'>
												<img
													className='header-illustration-image asset-light'
													src='dist/images/header-illustration-light.svg'
													alt='Header illustration'></img>
											</div>
											<div className='hero-media-illustration'>
												<img
													className='hero-media-illustration-image asset-light'
													src='dist/images/hero-media-illustration-light.svg'
													alt='Hero media illustration'></img>
											</div>
											<div className='hero-media-container'>
												<img
													className='hero-media-image asset-light'
													src='dist/images/hero-media-light.svg'
													alt='Hero media'></img>
											</div>
										</div>
									</div>
								</div>
								<div className='features-header text-center'>
									<h2 className='section-title'>
										How does video call dating work?
									</h2>
									<p className='section-paragraph'>
										Pandating is an app that helps you knowing your future date
										by answering to specific question about different topics
									</p>
									<div className='features-image'>
										<img
											className='features-illustration asset-light'
											src='dist/images/features-illustration-light.svg'
											alt='Feature illustration'></img>
										<img
											className='features-box asset-light'
											src='dist/images/features-box-light.svg'
											alt='Feature box'></img>
										<img
											className='features-illustration asset-light'
											src='dist/images/features-illustration-top-light.svg'
											alt='Feature illustration top'></img>
									</div>
									<div className='features-header text-center'>
										<div class='features-wrap'>
											<div class='feature-inner'>
												<div class='feature-icon'>
													<img
														class='asset-light'
														src='dist/images/feature-01-light.svg'
														alt='Feature 01'></img>
												</div>
												<div class='feature-content'>
													<h3 class='feature-title mt-0'>
														1. Press the button to start your date
													</h3>
													<p class='text-sm mb-0'>
														Each person has different opinions and visions about
														certain things, and we want to help you find out.You're
														almost ready to go!
													</p>
												</div>
											</div>
											<br></br>
											<div class='feature-inner'>
												<div class='feature-icon'>
													<img
														class='asset-light'
														src='dist/images/feature-02-light.svg'
														alt='Feature 02'></img>
												</div>
												<div class='feature-content'>
													<h3 class='feature-title mt-0'>
														2. Write your name, accept using your mic & video
													</h3>
													<p class='text-sm mb-0'>
														After you set up your microphone and camera you are
														ready to start playing our little question roulette
													</p>
												</div>
											</div>
											<br></br>
											<div class='feature-inner'>
												<div class='feature-icon'>
													<img
														class='asset-light'
														src='dist/images/feature-03-light.svg'
														alt='Feature 03'></img>
												</div>
												<div class='feature-content'>
													<h3 class='feature-title mt-0'>
														3. Send the link to your date and start answering the
														questions together
													</h3>
													<p class='text-sm mb-0'>
														Have fun! Oh and one more thing, don't forget the
														feedback at the end
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div></div>
							</section>
						</main>

						<div style={{ backgroundColor: '#F0F0F0' }}>
							<div className='footercontent group'>
								<img
									className='inimafooter'
									src='https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/129486737_860643514708489_2489845482878166188_n.png?_nc_cat=100&ccb=2&_nc_sid=ae9488&_nc_ohc=lLK1jhYaa-4AX85mL8d&_nc_oc=AQkUKv7ctu_hAVyc6I-2D6BcHmQN8se9q2OAX8YPxA1IE3e_dNX2IzuH3FNtzXbY6oU&_nc_ht=scontent.fias1-1.fna&oh=dbb241f6efabfc0c2ba48bcba89eba52&oe=5FF1F4C2'
									alt='heart'
								/>
								<img
									src='https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/129267679_869537930513202_4201963194097441640_n.png?_nc_cat=110&ccb=2&_nc_sid=ae9488&_nc_ohc=N_Anps5ULXkAX9g3-06&_nc_ht=scontent.fias1-1.fna&oh=63a781754fbd18a04d39ac81bcfd6681&oe=5FF16B2F'
									alt='nothing'
								/>
							</div>
							<MDBFooter color='blue' className='font-small pt-4 mt-4'>
								<MDBContainer fluid className='text-center text-md-left'>
									<MDBRow>
										<MDBCol md='3'></MDBCol>
										<MDBCol md='6'></MDBCol>
										<MDBCol md='3'></MDBCol>
									</MDBRow>
								</MDBContainer>
								<div className='footer-copyright text-center py-3'>
									<MDBContainer fluid>
										&copy; {new Date().getFullYear()} Copyright
									</MDBContainer>
								</div>
							</MDBFooter>
						</div>
					</div>
				</div>
			</body>
		);
	}
}

export default Home;
