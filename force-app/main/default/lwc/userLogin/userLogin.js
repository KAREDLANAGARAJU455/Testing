import { LightningElement } from 'lwc';
import { RefreshEvent } from 'lightning/refresh';

export default class UserLogin extends LightningElement {
    username = '';
    emailaddress = '';

   constructor(){
       super();
   }
   
   loginHandler(event){
           console.log(event.detail);
   }

   cancelHandler(event){
       this.dispatchEvent(new RefreshEvent());
   }

}