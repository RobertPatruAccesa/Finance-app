import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionDetailsComponent } from './transaction-details.component';
import { DebugElement } from '@angular/core';
import { TransactionsService } from '../core/services/transactions.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TransactionDetailsComponent', () => {
	let component: TransactionDetailsComponent;
	let fixture: ComponentFixture<TransactionDetailsComponent>;
	let el: DebugElement;

	let transactionsService: TransactionsService;
    let httpTestinController: HttpTestingController;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
                TransactionDetailsComponent
            ],
			providers: [
                TransactionsService
            ],
			imports: [
                HttpClientTestingModule
            ]
		}).compileComponents();

		fixture = TestBed.createComponent(TransactionDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
		el = fixture.debugElement;

		transactionsService = TestBed.get(TransactionsService);
        httpTestinController = TestBed.get(HttpTestingController);
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should create inputs', () => {
		const descriptionInput = el.query(By.css('.description'));
		expect(descriptionInput).toBeTruthy();

		const amountInput = el.query(By.css('.amount'));
		expect(amountInput).toBeTruthy();

		const categoryInput = el.query(By.css('.category'));
		expect(categoryInput).toBeTruthy();

		const paymentTypeInput = el.query(By.css('.payment-type'));
		expect(paymentTypeInput).toBeTruthy();

		const dateInput = el.query(By.css('.date'));
		expect(dateInput).toBeTruthy();
	});

	it('should retreive data for the selected transaction', () => {});
});
