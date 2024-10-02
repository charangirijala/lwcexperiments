import { LightningElement,track } from 'lwc';

export default class Childlwc extends LightningElement {
    @track exp=[{value:1,data:'one'},{value:2,data:'two'}];
    connectedCallback(){
        console.log('Childlwc Connectedcallback');
    }

    renderedCallback(){
        console.log('Childlwc renderedcallback');
        this.exp.push({
            value:3,
            data:'three'
        });
        console.log('Pushed data exp: ',JSON.stringify(this.exp));
    }
    class='';
    handleClick(){
        if(this.class===''){
            this.class='slds-transition-hide';
        }else{
            this.class='';
        }
    }

    get className(){
        return this.class;
    }
}