import { LightningElement,wire,track } from 'lwc';
import { getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
export default class UiObjectInfoApi extends LightningElement {
	@track value;
    @track options;
		
		@wire(getPicklistValuesByRecordType, { objectApiName: 'Account', recordTypeId: '0125h0000015YwKAAU' }) 
    IndustryPicklistValues({error, data}) {
        if(data) {
            this.options = data.picklistFieldValues.Type.values;
        }
        else if(error) {
            window.console.log('error =====> '+JSON.stringify(error));
        }
    }
		handleChange(event) {
        this.value = event.target.value;
    }
}