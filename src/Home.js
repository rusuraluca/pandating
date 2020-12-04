import React, { Component } from 'react';
import { Input, Button, IconButton } from '@material-ui/core';
import { Jumbotron, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Home.css"

class Home extends Component {
  	constructor (props) {
		super(props)
		this.state = {
			url: ''
		}
	}

	handleChange = (e) => this.setState({ url: e.target.value })

	join = () => {
		if (this.state.url !== "") {
			var url = this.state.url.split("/")
			window.location.href = `/${url[url.length-1]}`
		} else {
			var url = Math.random().toString(36).substring(2, 7)
			window.location.href = `/${url}`
		}
	}

	render() {
		return (
			<div>
				<Navbar bg="dark" variant="dark" style={{ textAlign: "center" }}>
						<Navbar.Brand href="#home">Pandating</Navbar.Brand>
						<Nav className="center-block">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
				</Navbar>

				<Jumbotron>
					<div>
						<h1 style={{ fontSize: "45px" }}>Dating is now on videocall!</h1>
						<p style={{ fontWeight: "200" }}>Now with dating while distancing on most singles’ minds, doing a VIDEO CALL DATE before deciding to meet someone is the new norm and this app is the place for that.</p>
					</div>
					<div>
						<p style={{ margin: 0, fontWeight: "bold", paddingRight: "auto", paddingLeft: "auto" }}>Start or join a date</p>
						<Button variant="contained" color="primary" onClick={this.join}>Go</Button>
					</div>
				</Jumbotron>
				<div className="container2">
				</div>
			</div>
		)
	}
}

export default Home;