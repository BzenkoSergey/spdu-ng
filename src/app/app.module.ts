import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UsersService } from './rest/users.service';

import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		UsersService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
