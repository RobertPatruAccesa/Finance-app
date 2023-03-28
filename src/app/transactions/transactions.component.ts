import { Component, OnInit } from '@angular/core';
import { Transaction } from '../core/interfaces/transaction.interface';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { deployGetAllTransactionsAction } from '../store/transactions/transactions.actions';
import { getTransactionsSelector } from '../store/transactions/transactions.selector';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

@Component({
	selector: 'app-transactions',
	templateUrl: './transactions.component.html',
	styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
	transactions$!: Observable<Transaction[]>;

	firebaseConfig = {
		apiKey: 'AIzaSyDRvRNjS5dmFFvbGDU27rEm2rMAhCZUMN8',
		authDomain: 'finance-app-8224e.firebaseapp.com',
		projectId: 'finance-app-8224e',
		storageBucket: 'finance-app-8224e.appspot.com',
		messagingSenderId: '876942998162',
		appId: '1:876942998162:web:aedc332f871602a076c44b',
		measurementId: 'G-RZ7VHPE692'
	};
	app = initializeApp(this.firebaseConfig);
	db = getFirestore(this.app);

	constructor(private store: Store<{ transactions: Transaction[] }>) {}

	async ngOnInit(): Promise<void> {
		this.store.dispatch(deployGetAllTransactionsAction());
		this.transactions$ = this.store.pipe(select(getTransactionsSelector));

		try {
			const docRef = await addDoc(collection(this.db, 'users'), {
				first: 'Ada',
				last: 'Lovelace',
				born: 1815
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}
}
