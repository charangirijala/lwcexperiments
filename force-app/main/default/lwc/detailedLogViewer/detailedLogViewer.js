import { api, LightningElement } from "lwc";

export default class DetailedLogViewer extends LightningElement {
  @api idLimitMin;
  @api idLimitMax;
  @api logId;
  @api logsMasterData;
  lowerLimitReached = false;
  upperLimitReached = false;
  closeLogViewer() {
    console.log("Closing the viewer");
    this.dispatchEvent(new CustomEvent("closelogviewer"));
  }
  renderedCallback() {
    console.log("Rendering detailedViewer for Id:", this.logId);
  }
  handleForward() {
    let nextLogId = parseInt(this.logId) + 1;
    console.log(
      "changed the logViewer to nxt treenode nextLogId:",
      nextLogId,
      " idLimitMin",
      this.idLimitMin,
      " idLimitMax",
      this.idLimitMax
    );
    if (nextLogId === this.idLimitMax) {
      this.upperLimitReached = true;
    }
    if (nextLogId > this.idLimitMin && nextLogId < this.idLimitMax) {
      this.upperLimitReached = false;
      this.lowerLimitReached = false;
    }
    this.logId = nextLogId.toString();
  }
  handleBackward() {
    const logid = parseInt(this.logId);
    if (logid === this.idLimitMin) {
      this.lowerLimitReached = true;
      return;
    }
    const prevLogId = logid - 1;
    console.log(
      "changed the logViewer to prev treenode prevLogId:",
      prevLogId,
      " idLimitMin",
      this.idLimitMin,
      " idLimitMax",
      this.idLimitMax
    );
    if (prevLogId === this.idLimitMin) {
      this.lowerLimitReached = true;
    }
    if (prevLogId > this.idLimitMin && prevLogId < this.idLimitMax) {
      this.upperLimitReached = false;
      this.lowerLimitReached = false;
    }
    this.logId = prevLogId.toString();
  }
  get LogHeaderDetails() {
    if (this.logId) {
      const size = this.idLimitMax - this.idLimitMin;
      const temp = size + (this.idLimitMin - parseInt(this.logId));
      const idx = size - temp;
      console.log("LogHeaderDetails calculated: ", this.logsMasterData[idx]);
      return this.logsMasterData[idx];
    }
    if (
      (this.logId === undefined || this.logId === null) &&
      this.logsMasterData.length > 0
    ) {
      this.lowerLimitReached = true;
      this.logId = this.idLimitMin;
      return this.logsMasterData[0];
    }
    return undefined;
  }
}
