import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import {
	Jumbotron,
	Row, Container,
	Col, Nav, Navbar, Tabs, Tab
} from 'react-bootstrap';
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
			<div className="is-boxed has-animations">
				<div className="body-wrap boxed-container">
					<Navbar>
						<Navbar.Brand>Logo</Navbar.Brand>
					</Navbar>
				<main>
					<section className="hero">
					<div className="container">
						<div className="hero-inner">
							<div className="hero-copy">
								<h1 className="hero-title mt-0" style={{ fontSize: "50px" }}>Dating is now on videocall</h1>
								<br></br>
								<p className="hero-paragraph">Now with dating while distancing on most singles’ minds, doing
									a <b>VIDEO CALL DATE</b> before deciding to meet someone is the new
									norm and this app is the place for that.</p>
								<br></br>
								<h4 className="hero-title mt-0"> The perfect date is only one click away from you and the person you want to date </h4>
								<Button class="button button-primary"  style={{ fontSize: "20px" }} onClick={this.join}>
									Go on the date already
								</Button>
								<br></br>
								<br></br>
								<br></br>
							</div>
							<div className="hero-media">
								<div className="header-illustration">
									<img className="header-illustration-image asset-light"
										 src="dist/images/header-illustration-light.svg" alt="Header illustration"></img>
								</div>
								<div className="hero-media-illustration">
									<img className="hero-media-illustration-image asset-light"
										 src="dist/images/hero-media-illustration-light.svg"
										 alt="Hero media illustration"></img>
								</div>
								<div className="hero-media-container">
									<img className="hero-media-image asset-light" src="dist/images/hero-media-light.svg"
										 alt="Hero media"></img>
								</div>
							</div>
							</div>
						</div>
						<div className="features-header text-center">
								<h2 className="section-title">How does video call dating work?</h2>
								<p className="section-paragraph">Lorem ipsum is common placeholder text used to
										demonstrate the graphic elements of a document or visual presentation.</p>
								<div className="features-image">
													<img className="features-illustration asset-light"
														 src="dist/images/features-illustration-light.svg"
														 alt="Feature illustration"></img>
														<img className="features-box asset-light"
															 src="dist/images/features-box-light.svg" alt="Feature box"></img>
															<img className="features-illustration asset-light"
																 src="dist/images/features-illustration-top-light.svg"
																 alt="Feature illustration top"></img>
								</div>
						<div className="features-header text-center">
						<div class="features-wrap">
								<div class="feature-inner">
									<div class="feature-icon">
										<img class="asset-light" src="dist/images/feature-01-light.svg" alt="Feature 01"></img>
									</div>
									<div class="feature-content">
										<h3 class="feature-title mt-0">1. Press the button to start your date</h3>
										<p class="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
							<br></br>
								<div class="feature-inner">
									<div class="feature-icon">
										<img class="asset-light" src="dist/images/feature-02-light.svg" alt="Feature 02"></img>
									</div>
									<div class="feature-content">
										<h3 class="feature-title mt-0">2. Write your name, accept using your mic & video</h3>
										<p class="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
							<br></br>
							<div class="feature-inner">
									<div class="feature-icon">
										<img class="asset-light" src="dist/images/feature-03-light.svg" alt="Feature 03"></img>
									</div>
									<div class="feature-content">
										<h3 class="feature-title mt-0">3. Send the link to your date and start answering the questions together</h3>
										<p class="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
							</div>
						</div>
						</div>
						<div>

						</div>
					</section>
				</main>

				<div style={{backgroundColor: '#F0F0F0'}}>
					<MDBFooter color="blue" className="font-small pt-4 mt-4">
						<MDBContainer fluid className="text-center text-md-left">
							<MDBRow>
								<MDBCol md="3"></MDBCol>
								<MDBCol md="6">
									<h5 className="title">Footer Content</h5>
									<p>
										Here you can use rows and columns here to organize your footer
										content.
									</p>
								</MDBCol>
								<MDBCol md="3">
								</MDBCol>
							</MDBRow>
						</MDBContainer>
						<div className="footer-copyright text-center py-3">
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
