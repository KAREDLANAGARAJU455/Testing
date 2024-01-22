import { LightningElement,track } from 'lwc';
import { RefreshEvent } from 'lightning/refresh';

export default class LoginPage extends LightningElement {
	
	 username = '';
	 emailaddress = '';

	constructor(){
		super();
	}
	
	loginHandler(event){
			
	}

	cancelHandler(event){
		this.dispatchEvent(new RefreshEvent());
	}


}