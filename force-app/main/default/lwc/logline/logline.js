import { LightningElement, api } from "lwc";
import { loadStyle } from "lightning/platformResourceLoader";
import customTableStyling from "@salesforce/resourceUrl/customTableStyling";

export default class Logline extends LightningElement {
  @api logLine;
  eventClassComb = "slds-line-clamp";

  get VARIN() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "VARIN") {
        this.eventClassComb += " varin";
        return true;
      }
    }
    return false;
  }

  get VARAS() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "VARAS") {
        this.eventClassComb += " varas";
        return true;
      }
    }
    return false;
  }

  get DEBUG() {
    if (this.logLine.logLineData) {
      if (this.logLine.logLineData.type === "DEBUG") {
        this.eventClassComb += " debug";
        return true;
      }
    }
    return false;
  }

  get CODEUNIT() {
    if (this.logLine.type === "codeunit") {
    }
  }

  get METHODUNIT() {
    if (this.logLine.type === "methodunit") {
    }
  }
}
