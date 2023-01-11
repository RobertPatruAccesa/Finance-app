import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChartBoxComponent } from './chart-box/chart-box.component';
import { TransactionsModule } from '../transactions/transactions.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	declarations: [HomeComponent, ChartBoxComponent],
	imports: [CommonModule, TransactionsModule, HomeRoutingModule],
	exports: []
})
export class HomeModule {}
