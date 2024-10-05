import { api, LightningElement } from "lwc";

export default class DetailedLogViewer extends LightningElement {
  @api idLimitMin;
  @api idLimitMax;
  @api logId;
  @api logsMasterData;
  closeLogViewer() {
    console.log("Closing the viewer");
    this.dispatchEvent(new CustomEvent("closelogviewer"));
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
  }
  handleBackward() {
    let prevLogId = parseInt(this.logId) - 1;
    console.log(
      "changed the logViewer to prev treenode prevLogId:",
      prevLogId,
      " idLimitMin",
      this.idLimitMin,
      " idLimitMax",
      this.idLimitMax
    );
  }
  get LogHeaderDetails() {
    if (this.logId) {
      const treenode = this.logsMasterData.find((treenode) => {
        return treenode.Id.toString() === this.logId;
      });
      if (treenode === undefined) {
        console.log("No results found");
      } else {
        console.log("TreeNode name: ", treenode.name);
      }

      return treenode;
    }

    return undefined;
  }
}
