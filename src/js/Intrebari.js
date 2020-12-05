/** @format */
import React, { useState } from 'react';

function Intrebari({ utilizatori }) {
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
		console.log('final');
	};
	const afisareintrebare = () => {
		console.log(utilizatori);
		var i, index;
		for (i = 0; i <= 14; i++) {
			if (intrebare_afisare == intrebari[i]) {
				index = i;
			}
		}
		if (index <= 13) {
			setintrebare_afisare(intrebari[index + 1]);
		} else {
			finally_conv();
		}
	};
	return (
		<>
			<div className='indiv'>
				<div className='intrebari group'>
					<div className='intrebaridiv '>
						<div className='intrebare1'>
							<span className='intrebarespan'>{intrebare_afisare}</span>
						</div>
						<button
							className='buttonnext'
							onClick={() => {
								afisareintrebare();
								document.querySelector('.buttonnext').classList.add('active');
								document
									.querySelector('.intrebarespan')
									.classList.add('active2');
								setTimeout(() => {
									document
										.querySelector('.buttonnext')
										.classList.remove('active');
									document
										.querySelector('.intrebarespan')
										.classList.remove('active2');
								}, 600);
							}}>
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intrebari;
