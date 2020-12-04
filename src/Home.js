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
						<Navbar.Brand href="#home">Navbar</Navbar.Brand>
						<Nav className="center-block">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#features">Features</Nav.Link>
							<Nav.Link href="#pricing">Pricing</Nav.Link>
						</Nav>
				</Navbar>

				<Jumbotron>
					<div>
						<h1 style={{ fontSize: "45px" }}>Video Meeting</h1>
						<p style={{ fontWeight: "200" }}>Video conference website that lets you stay in touch with all your friends.</p>
					</div>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Jumbotron>
			<div className="container2">

				<div>
					<p style={{ margin: 0, fontWeight: "bold", paddingRight: "50px" }}>Start or join a meeting</p>
					<Input placeholder="URL" onChange={e => this.handleChange(e)} />
					<Button variant="contained" color="primary" onClick={this.join} style={{ margin: "20px" }}>Go</Button>
				</div>
			</div>
			</div>
		)
	}
}

export default Home;