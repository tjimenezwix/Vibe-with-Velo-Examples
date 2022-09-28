import { authentication } from 'wix-members';
import wixWindow from 'wix-window';

// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

	// Write your Javascript code here using the Velo framework API

	// Print hello world:
	// console.log("Hello world!");

	// Call functions on page elements, e.g.:
	// $w("#button1").label = "Click me!";

	// Click "Run", or Preview your site, to execute your code

});


export function signUpButton_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	
	let email = $w('#emailInput');
	let password = $w('#passwordInput');

	if(!email.valid) {
		email.updateValidityIndication();
	} 

	if(!password.valid){
		password.updateValidityIndication();
	}

	if(email.valid && password.valid) {
		authentication.login(email.value,password.value)
			.then((result) => {
				wixWindow.lightbox.close();
			})
			.catch((error) => {
				let errorMessage = $w('#errorMessage');
				errorMessage.show("bounce");
				setTimeout(() => {
					errorMessage.hide("bounce");
				}, 3000);
			});
	}
}