import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { SendForm } from '../store/rca.actions';
import { RcaForm } from '../rca-form.models';

@Component({
	selector: 'app-rca-page-one',
	templateUrl: './rca-page-one.component.html',
	styleUrls: ['./rca-page-one.component.scss']
})
export class RcaPageOneComponent implements OnInit {
	rcaForm!: FormGroup;

	formValid: boolean = false;
	showToaster: boolean = false;

	carBrands: any = [];
	carModels: any = '';
	serviciiExtra: string[] = ['Asistenta pana', 'Asistetna breakdown', 'Asistenta accident', 'Asistetna furt'];

	constructor(private http: HttpClient, private store: Store) {}

	ngOnInit(): void {
		this.rcaForm = new FormGroup({
			stare_inmatriculare: new FormControl('alege', Validators.required),
			numar_inmatriculare: new FormControl(null, [
				Validators.required,
				Validators.pattern(/[a-zA-Z]{1,2}[0-9]{1,2}[a-zA-Z]{3}/)
			]),
			categorie: new FormControl('alege', [Validators.required]),
			marca: new FormControl('alege', [Validators.required]),
			model: new FormControl('alege', [Validators.required]),
			numar_identificare_sasiu: new FormControl(null, [Validators.required]),
			tip_utilizare: new FormControl('utilizare normala', [Validators.required]),
			utilizare_specifica: new FormControl('alege', [Validators.required]),
			serie_carte_auto: new FormControl(null, [Validators.required]),
			masa_maxima_autorizata: new FormControl(null, [Validators.required]),
			capacitate_cilindrica: new FormControl(null, [Validators.required]),
			an_fabricatie: new FormControl(null, [Validators.required]),
			numar_locuri: new FormControl(null, [Validators.required]),
			putere: new FormControl(null, [Validators.required]),
			servicii_extra: new FormControl('alege', [])
		});

		// this.carBrands = getCarBrands();

		this.http.get('http://localhost:4200/api/cars').subscribe(data => (this.carBrands = data));
	}

	onSubmit() {
		console.log(this.rcaForm.value);

		if (this.rcaForm.status == 'VALID') {
			const form: RcaForm = {
				an_fabricatie: this.rcaForm.value.an_fabricatie,
				capacitate_cilindrica: this.rcaForm.value.capacitate_cilindrica,
				categorie: this.rcaForm.value.categorie,
				marca: this.rcaForm.value.marca,
				masa_maxima_autorizata: this.rcaForm.value.masa_maxima_autorizata,
				mode: this.rcaForm.value.mode,
				numar_identificare_sasiu: this.rcaForm.value.numar_identificare_sasiu,
				numar_inmatriculare: this.rcaForm.value.numar_inmatriculare,
				numar_locuri: this.rcaForm.value.numar_locuri,
				putere: this.rcaForm.value.putere,
				serie_carte_auto: this.rcaForm.value.serie_carte_auto,
				servicii_extra: this.rcaForm.value.servicii_extra,
				stare_inmatriculare: this.rcaForm.value.stare_inmatriculare,
				tip_utilizare: this.rcaForm.value.tip_utilizare,
				utilizare_specifica: this.rcaForm.value.utilizare_specifica
			};

			this.store.dispatch(SendForm({ rcaForm: form }));

			this.showToaster = true;
			this.formValid = true;
		} else {
			this.showToaster = true;
			this.formValid = false;
		}

		setTimeout(() => {
			this.showToaster = false;
			this.formValid = false;
		}, 2000);
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

		selectedBrand = this.carBrands.filter((car: any) => car.brand == this.rcaForm.get('marca')?.value);

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
