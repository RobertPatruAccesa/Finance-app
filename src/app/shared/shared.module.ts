import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToasterComponent } from './toaster/toaster.component';
import { ButtonComponent } from './button/button.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
	declarations: [SidebarComponent, ToasterComponent, ButtonComponent],
	imports: [CommonModule, AppRoutingModule],
	exports: [SidebarComponent, ToasterComponent, ButtonComponent]
})
export class SharedModule {}
