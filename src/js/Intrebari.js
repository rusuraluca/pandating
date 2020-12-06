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
			seconds: 15,
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
			this.getIndex() <= 18
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
				this.setState({ seconds: 300, timer: {} });
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
		'What would be the title of your autobiography?',
		'What do you like doing in your free time?',
		'What is the most ridiculous way in which you’ve hurt yourself?',
		'What would you like to change in your life and why?',
		'If you had to live inside the mythical world of a game/TV show/movie, which one would you pick?',
		'What do you think about everything that is happening in the world and how this will influence us in our future?',
		'If you had the power to change one thing in this world, what would you change?',
		'What’s the most relaxing situation you could imagine? ',
		'Are you who you wanted to be?',
		'Who are you when no one is watching?',
		'If you could only use only one Harry Potter spell, which one would you choose?',
		'When are you the most ‘ you ’ that you can be? In other words, when do you fell most like yourself? ',
		'Where do you want to live and why?',
		'What’s the best thing that has happened to you this month?',
		'Would you like to be famous? (If yes, what would you want to be famous for? If   not, why?)',
		'If you could go back in time as an observer, no one could see you, and you couldn’t interact with anything, when would you want to go back to?',
		'You can speak as long as you want.',
	];
	const [intrebare_afisare, setintrebare_afisare] = useState(
		intrebari[0],
	);
	const finally_conv = () => {
		document.querySelector('.nextQuestion').textContent = 'Date ended.';
		document.querySelector('.timeleftspan').textContent = '';
		handleShow();
	};
	const getIndex = () => {
		let i, index;
		for (i = 0; i <= 19; i++) {
			if (intrebare_afisare == intrebari[i]) {
				index = i;
				break;
			}
		}
		return index;
	};
	const afisareintrebare = () => {
		const index = getIndex();
		if (index != 17 && index != 19)
			document.querySelector('.nextQuestion').textContent =
				'Next question in : ';
		else
			document.querySelector('.nextQuestion').textContent =
				'Last Question in : ';
		if (index == 18) {
			document.querySelector('.nextQuestion').textContent =
				'Date ending in : ';
		}
		if (index <= 18) {
			setintrebare_afisare(intrebari[index + 1]);
		} else {
			setintrebare_afisare(intrebari[index + 1]);
			finally_conv();
		}
	};
	const pornire = () => {
		setTimeout(() => {
			document.querySelector('.nothinghere').click();
		}, 3000);
	};
	const imagine1 = [
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130190340_388551539047103_5886769185361206040_n.png?_nc_cat=103&ccb=2&_nc_sid=ae9488&_nc_ohc=CJrueuhVnF4AX8z40vx&_nc_ht=scontent.fias1-1.fna&oh=f3801c8289f790ee88541d482d03f4fa&oe=5FF10E6B',
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130224430_125824282538174_7437642875613367009_n.png?_nc_cat=109&ccb=2&_nc_sid=ae9488&_nc_ohc=eFo6ng2OhJQAX_Q443m&_nc_ht=scontent.fias1-1.fna&oh=49882b99d7919ca2aa6886299943b438&oe=5FF24386',
	];
	const imagine2 = [
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130243560_392439488639448_4958131891359374953_n.png?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=GSFqlolKG7AAX-g2zXD&_nc_oc=AQkKx_f_nySDlK71_rIYyh5E41YuBKwNeFvB221gOQoYSqwNZG1FRZDufx8Q8Eav4jc&_nc_ht=scontent.fias1-1.fna&oh=0870a736be09ce49f02dcde55c806fc3&oe=5FF2FF3F',
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130200636_698126071112305_4076710270598358119_n.png?_nc_cat=101&ccb=2&_nc_sid=ae9488&_nc_ohc=YawVyDwmLJAAX--MY7h&_nc_ht=scontent.fias1-1.fna&oh=6acf3d013a52fa02887e39d5b0071117&oe=5FF106B5',
	];
	const imagine3 = [
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130194071_826012898183110_2714643064871554712_n.png?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=0expxRVcu3MAX9AC5Gk&_nc_ht=scontent.fias1-1.fna&oh=c312f5b6a29db40507a34600865197b7&oe=5FF2A414',
		'https://scontent.fias1-1.fna.fbcdn.net/v/t1.15752-9/130282596_2255530704571214_950077133827528589_n.png?_nc_cat=104&ccb=2&_nc_sid=ae9488&_nc_ohc=9CVvmM7Z-5QAX8mg2Ti&_nc_ht=scontent.fias1-1.fna&oh=ec380ae030f9eb37c883c4f9c8e4a35a&oe=5FF3375F',
	];
	const imagini = [imagine1, imagine2, imagine3];
	const [img1, setImg1] = useState(imagine1[0]);
	const [img2, setImg2] = useState(imagine2[0]);
	const [img3, setImg3] = useState(imagine3[0]);
	const imagine1change = () => {
		if (img1 == imagine1[0]) {
			setImg1(imagine1[1]);
			document.querySelector('.imagine1').classList.add('animate');
			setTimeout(() => {
				if (document.querySelector('.imagine1'))
					document.querySelector('.imagine1').classList.remove('animate');
			}, 600);
		} else setImg1(imagine1[0]);
		setImg2(imagine2[0]);
		setImg3(imagine3[0]);
	};
	const imagine2change = () => {
		if (img2 == imagine2[0]) {
			setImg2(imagine2[1]);
			document.querySelector('.imagine2').classList.add('animate');
			setTimeout(() => {
				if (document.querySelector('.imagine2'))
					document.querySelector('.imagine2').classList.remove('animate');
			}, 600);
		} else setImg2(imagine2[0]);
		setImg1(imagine1[0]);
		setImg3(imagine3[0]);
	};
	const imagine3change = () => {
		if (img3 == imagine3[0]) {
			setImg3(imagine3[1]);
			document.querySelector('.imagine3').classList.add('animate');
			setTimeout(() => {
				if (document.querySelector('.imagine3'))
					document.querySelector('.imagine3').classList.remove('animate');
			}, 600);
		} else setImg3(imagine3[0]);
		setImg2(imagine2[0]);
		setImg1(imagine1[0]);
	};
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
					<div className='imagini group'>
						<div className='col-4 col imagine3'>
							<img
								src={img3}
								onClick={() => {
									imagine3change();
								}}></img>
						</div>
						<div className='col-4 col imagine2'>
							<img
								src={img2}
								onClick={() => {
									imagine2change();
								}}></img>
						</div>
						<div className='col-4 col imagine1'>
							<img
								src={img1}
								onClick={() => {
									imagine1change();
								}}></img>
						</div>
					</div>
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
