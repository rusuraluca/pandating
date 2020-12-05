/** @format */
import React, { useState, useEffect } from 'react';
class Example extends React.Component {
	constructor(props) {
		super(props);
		this.afisareintrebare = this.props.afisareintrebare;
		this.state = {
			time: {},
			seconds: 10,
			clicked2: false,
		};
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
		if (this.timer == 0 && this.state.seconds > 0) {
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
			clearInterval(this.timer);
			this.setState({ clicked2: false });
			document.querySelector('.butonnext').style.background = '#4022c6';
		}
	}

	render() {
		return (
			<div>
				<button
					className='butonnext'
					onClick={() => {
						this.afisareintrebare = this.props.afisareintrebare;
						this.clicked = true;
						this.setState({ clicked2: true });
						if (this.state.seconds == 10) {
							this.setState({
								time: this.secondsToTime(10),
								seconds: 10,
							});
							this.startTimer();
							this.question = true;
							document.querySelector('.butonnext').style.background =
								'#dc3d82';
						} else if (this.state.seconds == 0) {
							this.setState({
								time: this.secondsToTime(10),
								seconds: 10,
							});
							this.startTimer = this.startTimer.bind(this);
							this.countDown = this.countDown.bind(this);
							this.timer = setInterval(this.countDown, 1000);
							this.render();
							document.querySelector('.butonnext').style.background =
								'#dc3d82';

							this.afisareintrebare();
						} else alert('Just speak lol');
					}}>
					{this.clicked ? (
						<span className='button2'>Next question</span>
					) : (
						<span className='button2'>Start</span>
					)}
				</button>
				{this.state.clicked2 ? (
					<span className='timeleft'>
						Minutes: {this.state.time.m} Seconds: {this.state.time.s}
					</span>
				) : (
					''
				)}
			</div>
		);
	}
}

function Intrebari() {
	const intrebari = [
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
		document.querySelector('.button2').textContent = 'Exit';
		console.log('final');
	};
	const afisareintrebare = () => {
		var i, index;
		for (i = 0; i <= 14; i++) {
			if (intrebare_afisare == intrebari[i]) {
				index = i;
				break;
			}
		}
		if (index == 12) {
			document.querySelector('.button2').textContent = 'Last Question';
			setTimeout(() => {
				document.querySelector('.button2').textContent = 'Exit';
			}, 10000);
		}
		if (index <= 13) {
			setintrebare_afisare(intrebari[index + 1]);
		} else {
			finally_conv();
		}
	};
	const timp = 6000;
	const timp2 = 1000;
	const [ok, setOk] = useState(true);

	return (
		<>
			<div className='indiv'>
				<div className='intrebari group'>
					<div className='intrebaridiv '>
						<div className='intrebare1'>
							<span className='intrebarespan'>{intrebare_afisare}</span>
						</div>

						<Example afisareintrebare={afisareintrebare}></Example>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intrebari;
