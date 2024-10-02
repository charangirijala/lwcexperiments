import { LightningElement,api } from 'lwc';

export default class Logline extends LightningElement {
    @api type;
    @api varName;
    @api varType;
    @api lineNumber;
    @api isVarStatic;
    @api isVarAccessible;

    get VARIN(){
        if(this.type==='VARIN') return true;
        return false;
    }

    get VARAS(){
        if(this.type==='VARAS') return true;
        return false;
    }

    get DEBUG(){
        if(this.type==='DEBUG') return true;
        return false;
    }
}