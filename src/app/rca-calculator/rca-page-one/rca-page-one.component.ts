import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-rca-page-one',
	templateUrl: './rca-page-one.component.html',
	styleUrls: ['./rca-page-one.component.scss', './rca-page-one.component.css']
})
export class RcaPageOneComponent implements OnInit {
	carBrands: any = [];
	carModels: any = '';
	serviciiExtra: string[] = ['Asistenta pana', 'Asistetna breakdown', 'Asistenta accident', 'Asistetna furt'];
	rcaForm!: FormGroup;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {
		this.rcaForm = new FormGroup({
			'stare inmatriculare': new FormControl('alege', Validators.required),
			'numar inmatriculare': new FormControl(null, [
				Validators.required,
				Validators.pattern(/[a-zA-Z]{1,2}[0-9]{1,2}[a-zA-Z]{3}/)
			]),
			categorie: new FormControl('alege', [Validators.required]),
			marca: new FormControl('alege', [Validators.required]),
			model: new FormControl('alege', [Validators.required]),
			'numar identificare sasiu': new FormControl(null, [Validators.required, Validators.pattern(/[0-9]{4,9}/)]),
			'tip utilizare': new FormControl('utilizare normala', [Validators.required]),
			'utilizare specifica': new FormControl('alege', [Validators.required]),
			'serie carte auto': new FormControl(null, [Validators.required]),
			'masa maxima autorizata': new FormControl(null, [Validators.required]),
			'capacitate cilindrica': new FormControl(null, [Validators.required]),
			'an fabricatie': new FormControl(null, [Validators.required]),
			'numar locuri': new FormControl(null, [Validators.required]),
			putere: new FormControl(null, [Validators.required]),
			'servicii extra': new FormControl('alege', [])
		});

		// this.carBrands = getCarBrands();

		this.http.get('http://localhost:4200/api/cars').subscribe(data => (this.carBrands = data));
	}

	onSubmit() {
		console.log(this.rcaForm);
	}

	getAllExampleRows() {
		const exampleRows = document.querySelectorAll('.line');
		return exampleRows;
	}

	removeOutlineExample(array: any) {
		array.forEach((element: Element) => element.classList.remove('highlight-example'));
	}

	dispalyInfoExample(event: any) {
		const infoExample: HTMLElement = document.querySelector('div.info-example')!;

		if (event.clientY > window.innerHeight / 2) {
			infoExample.style.cssText = `
            display: flex;
            position: absolute;
            top: ${event.clientY - 250}px;
            left: ${event.clientX}px;
        `;
		} else {
			infoExample.style.cssText = `
            display: flex;
            position: absolute;
            top: ${event.clientY}px;
            left: ${event.clientX}px;
        `;
		}
	}

	removeInfoExample() {
		const infoExample: HTMLElement = document.querySelector('div.info-example')!;
		infoExample.style.display = 'none';
	}

	onSelectNumarInmatriculare(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[0].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectCategorie(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[1].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectMarca(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[2].classList.add('highlight-example');

		let selectedBrand;

		if (this.rcaForm.get('marca')?.value == 'alege') {
			selectedBrand = 'alege';
		} else {
			selectedBrand = this.carBrands.filter((car: any) => car.brand == this.rcaForm.get('marca')?.value);
		}

		this.carModels = selectedBrand[0].models;

		this.dispalyInfoExample(event);
	}

	onSelectModel(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[4].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectNumarIdentificareSasiu(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[5].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectSerieCarteAuto(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[20].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectMasaMaximaAutorizata(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[15].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectCapacitateCilindrica(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[16].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectAnFabricatie(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[13].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectNumarLocuri(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[19].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}

	onSelectPutere(event: any) {
		this.removeOutlineExample(this.getAllExampleRows());
		this.getAllExampleRows()[24].classList.add('highlight-example');
		this.dispalyInfoExample(event);
	}
}

// async function getCarBrands() {
//     const carBrands = await fetch('http://localhost:4200/api/cars')
// 		.then(res => {
// 			if (res.ok) {
// 				return res.json();
// 			} else return 'empty';
// 		})
// 		.then(data => {
//             return data;
//         })
// 		.catch(err => console.log(err));

//         console.log(carBrands);
//     return carBrands;
// }
