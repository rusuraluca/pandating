/** @format */
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
var socket = null;
const server_url = 'https://pandating.herokuapp.com/';
socket = io.connect(server_url, { secure: true });
var connections = {};
var socketId = null;
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
			document.querySelector('.timeleftspan').style.color = '#4022c6';
			clearInterval(this.timer);
			this.afisareintrebare = this.props.afisareintrebare;
			this.timer = 0;
			setTimeout(() => {
				this.setState({ seconds: 180, timer: {} });
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
	const allow = useRef(true);
	const intrebari = [
		'In acest date trebuie sa raspundeti la niste intrebari.',
		'Ce descoperire crezi că ar schimba complet viața oamenilor?',
		'Ce înseamnă pentru tine adevărata fericire?',
		'Ce vrei să realizezi în viitor?',
		'Ce-ți place să faci în timpul liber? ',
		'Ce ai schimba la viața ta și de ce?',
		'Ce crezi despre tot ceea ce se întâmplă acum în jurul nostru și cum ne va influența asta în viitor?',
		'Dacă ai avea puterea să schimbi ceva în lume, care ar fi acesta?',
		'Care este cea mai relaxantă situație în care te-ai putea afla?',
		'Ești ceea ce ți-ai dorit să fii?',
		' Cine ești tu atunci nu te vede nimeni?',
		'Dacă ai putea să te întorci în trecut, ce ai schimba la acesta?',
		'Unde ai vrea să locuiești și de ce?',
		'Crezi în talent sau în muncă continuă? Care dintre acestea crezi că te ajută mai mult să realizezi ceea ce îți dorești?',
		'Care este cel mai frumos lucru care ți s-a întâmplat luna aceasta? Vorbește-mi despre el.',
		'Îți place să citești cărți? Ce impact au asupra ta?',
	];
	const [intrebare_afisare, setintrebare_afisare] = useState(
		intrebari[0],
	);
	const finally_conv = () => {
		document.querySelector('.nextQuestion').textContent =
			'Date is ending in : ';
		console.log('final');
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
		if (index != 13)
			document.querySelector('.nextQuestion').textContent =
				'Next question in : ';
		else
			document.querySelector('.nextQuestion').textContent =
				'Last Question in : ';
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
	const [ok, setOk] = useState(true);
	useEffect(() => {
		setInterval(() => {
			if (allow.current && document.querySelector('.unvideo')) {
				pornire();
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
		</>
	);
}

export default Intrebari;
