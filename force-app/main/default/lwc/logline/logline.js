import { LightningElement, api } from "lwc";

export default class Logline extends LightningElement {
  @api logLine;

  get VARIN() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "VARIN") return true;
    }
    return false;
  }

  get VARAS() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "VARAS") return true;
    }
    return false;
  }

  get DEBUG() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "DEBUG") return true;
    }
    return false;
  }
}
