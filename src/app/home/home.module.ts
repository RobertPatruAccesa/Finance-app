import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChartBoxComponent } from './chart-box/chart-box.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionsModule } from '../transactions/transactions.module';

@NgModule({
	declarations: [HomeComponent, ChartBoxComponent],
	imports: [CommonModule, SharedModule, TransactionsModule],
	exports: [HomeComponent, ChartBoxComponent]
})
export class HomeModule {}
