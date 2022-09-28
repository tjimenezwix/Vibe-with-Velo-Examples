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

export function resetButton_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4

	let email = $w('#emailInput');

	if(!email.valid){
		email.updateValidityIndication();
	} else {
		authentication.sendSetPasswordEmail(email.value)
			.then(() => {
				$w('#resetConfirmed').show("bounce");
				setTimeout(() => {
					wixWindow.lightbox.close();
				}, 3000);
			});
	}
}