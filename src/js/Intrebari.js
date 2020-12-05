/** @format */
import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import io from 'socket.io-client';
var socket = null;
const server_url = 'https://pandating.herokuapp.com/';
socket = io.connect(server_url, { secure: true });

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.afisareintrebare = this.props.afisareintrebare;
		this.state = {
			time: {},
			seconds: 5,
			clicked2: false,
		};
		this.getIndex = this.props.getIndex;
		this.clicked = false;
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}
	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			h: hours,
			m: minutes,
			s: seconds,
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
	}

	startTimer() {
		this.getIndex = this.props.getIndex;
		if (
			this.timer == 0 &&
			this.state.seconds > 0 &&
			this.getIndex() <= 14
		) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		if (seconds == 0) {
			document.querySelector('.timeleftspan').style.color = '#d5ddfd';
			clearInterval(this.timer);
			this.afisareintrebare = this.props.afisareintrebare;
			this.timer = 0;
			setTimeout(() => {
				this.setState({ seconds: 4, timer: {} });
				this.startTimer();
				setTimeout(() => {
					this.afisareintrebare();
				}, 1000);
			}, 1000);
		}
	}

	render() {
		return (
			<div>
				<span
					className='nothinghere'
					onClick={() => {
						this.clicked = true;
						this.setState({ clicked2: true });
						this.startTimer();
					}}></span>
				{this.state.clicked2 ? (
					<div className='timeleft'>
						<span className='nextQuestion'>Start in : </span>
						<span className='timeleftspan'>
							Minutes: {this.state.time.m} Seconds: {this.state.time.s}
						</span>
					</div>
				) : (
					''
				)}
			</div>
		);
	}
}

function Intrebari() {
	const istorie = useHistory();
	const allow = useRef(true);
	const [ok, setOk] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const intrebari = [
		'In acest date trebuie sa raspundeti la niste intrebari.',
		'What ‘real happiness’ mean to you?',
		'What discovery do you think would completely change people’s lives?',
		'What do you want to achieve in the future?',
		'What do you like doing in your free time?',
		'What would you like to change in your life and why?',
		'What do you think about everything that is happening in the world and how this will influence us in our future?',
		'If you had the power to change one thing in this world, what would you change?',
		'What’s the most relaxing situation you could imagine? ',
		'Are you who you wanted to be?',
		'Who are you when no one is watching?',
		'When are you the most ‘ you ’ that you can be? In other words, when do you fell most like yourself? ',
		'Where do you want to live and why?',
		'What’s the best thing that has happened to you this month?',
		'Would you like to be famous? (If yes, what would you want to be famous for? If   not, why?)',
		'If you could go back in time as an observer, no one could see you, and you couldn’t interact with anything, when would you want to go back to?',
	];
	const [intrebare_afisare, setintrebare_afisare] = useState(
		intrebari[13],
	);
	const finally_conv = () => {
		document.querySelector('.nextQuestion').textContent = 'Date ended.';
		document.querySelector('.timeleftspan').textContent = '';
		handleShow();
	};
	const getIndex = () => {
		let i, index;
		for (i = 0; i <= 14; i++) {
			if (intrebare_afisare == intrebari[i]) {
				index = i;
				break;
			}
		}
		return index;
	};
	const afisareintrebare = () => {
		const index = getIndex();
		if (index != 13 && index != 15)
			document.querySelector('.nextQuestion').textContent =
				'Next question in : ';
		else
			document.querySelector('.nextQuestion').textContent =
				'Last Question in : ';
		if (index == 14) {
			document.querySelector('.nextQuestion').textContent =
				'Date ending in : ';
		}
		if (index <= 14) {
			setintrebare_afisare(intrebari[index + 1]);
		} else {
			finally_conv();
		}
	};
	const pornire = () => {
		setTimeout(() => {
			document.querySelector('.nothinghere').click();
		}, 3000);
	};
	const timp = 6000;
	const timp2 = 1000;

	useEffect(() => {
		setInterval(() => {
			if (allow.current && document.querySelector('.unvideo')) {
				pornire();
				setOk(true);
				allow.current = false;
			}
		}, 1000);
	}, []);

	return (
		<>
			<div className='indiv'>
				<div className='intrebari group'>
					<div className='intrebaridiv '>
						<div className='intrebare1'>
							<span className='intrebarespan'>{intrebare_afisare}</span>
						</div>

						<Example
							afisareintrebare={afisareintrebare}
							getIndex={getIndex}></Example>
					</div>
				</div>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title style={{ color: '#5e36de' }}>
						<span>Date ended !</span>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ color: '#5e36de' }}>
					<span>I hope you enjoyed it !</span>
				</Modal.Body>
				<Modal.Footer style={{ color: '#5e36de' }}>
					<Button
						variant='secondary'
						style={{
							background: '#d5ddfd',
							color: '#5e36de',
							border: '1px solid #5e36de',
						}}
						onClick={() => {
							handleClose();

							document.querySelector('.timeleftspan').textContent = '';
						}}>
						Continue the date
					</Button>
					<Button
						variant='primary'
						style={{
							background: '#d5ddfd',
							color: '#5e36de',
							border: '1px solid #5e36de',
						}}
						onClick={() => {
							istorie.push('/');
							handleClose();
						}}>
						Leave the date
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Intrebari;
