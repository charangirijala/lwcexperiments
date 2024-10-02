import { LightningElement } from 'lwc';

export default class Codeunit extends LightningElement {
    isOpen=true;
    isClosed=false;
    toggleUnit(){
        this.isOpen=!this.isOpen;
        this.isClosed=!this.isClosed;
    }

    get codeUnitClass(){
        const temp='slds-timeline__item_expandable slds-timeline__item_task'
        if(this.isOpen && !this.isClosed) return temp+' slds-is-open';

        return temp;
    }
}