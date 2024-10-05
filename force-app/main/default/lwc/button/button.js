import { LightningElement } from "lwc";

export default class Button extends LightningElement {
  clickHandler(event) {
    let eventInfo = new CustomEvent("eventinfo", event);
    this.dispatchEvent(eventInfo);
  }
}
