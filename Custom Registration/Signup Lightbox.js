import { authentication } from 'wix-members';
import wixWindow from 'wix-window';

$w.onReady(function () {

});

//This is a onClick Event Handler added through the Code Panel for a "Signup Button" - Can be implemented at $w("#signUpButton").onClick as well
export function signUpButton_click(event) {
	let email = $w("#emailInput"); //TextInput Element for Email 
	let password = $w("#passwordInput"); //TextInput Element for Password

	if(!email.valid){
		email.updateValidityIndication(); //Makes TextInput red to indicate invalid input
	}

	if(!password.valid){
		password.updateValidityIndication(); //Makes TextInput red to indicate invalid input
	}

	if(email.valid && password.valid){
		let emailInput = email.value; 
		let passwordInput = password.value; 

		//Register then logs in new user - Can be written using async/await if preferred 
		authentication.register(emailInput,passwordInput)
			.then(() => {
				authentication.login(emailInput,passwordInput)
					.then(() => {
						//This happens after user is successfully logged in
						wixWindow.lightbox.close();
					})
					.catch((error) =>{
						//Catch any errors due to Login
						console.log(error);
					})
			})
			.catch((error) =>{
				//Catch any errors due to Registration
				console.log(error);
			})

	}
}