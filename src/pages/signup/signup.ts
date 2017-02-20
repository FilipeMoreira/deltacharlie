import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

	isProfessor = false;

	constructor(public navCtrl: NavController) {

	}

	onFieldChange() {
		this.isProfessor = !this.isProfessor;
		console.log("ashda" + this.isProfessor);
	}

}
