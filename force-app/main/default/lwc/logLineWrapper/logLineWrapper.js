import { api, LightningElement } from "lwc";
/*
  Example Schema of logData:
  {"Id":88036,
  "type":"line",
  "logLineData":{"lineNumber":"[44]",
  "type":"VARAS",
  "varName":"execAnMatcher",
  "varValue":"{\"delegate\":\"0x79ce1bfb\"}"},
  "name":null,
  "unitId":null}

  {"Id":73448,
  "type":"unit",
  "logLineData":null,
  "name":"apexLogTryController",
  "unitId":61497}
 */
export default class LogLineWrapper extends LightningElement {
  @api logData;

  logsArr = [];
  connectedCallback() {
    this.logsArr = this.logData;
    this.logsArr.forEach((log) => {
      console.log("logsArr Data:", JSON.stringify(log));
      if (log.type === "line") {
        log.isLine = true;
        log.isUnit = false;
        // <!-- VARAS -->
        if (log.logLineData.type === "VARAS") {
          log.logLineData.eventClassComb = "slds-line-clamp varas";
          log.logLineData.type = "Variable Assigned:";
        }
        // <!-- VARIN -->
        else if (log.logLineData.type === "VARIN") {
          log.logLineData.eventClassComb = "slds-line-clamp varin";
          log.logLineData.type = "Variable Initialized:";
        }

        // <!-- DEBUG -->
        else if (log.logLineData.type === "DEBUG") {
          log.logLineData.eventClassComb = "slds-line-clamp debug";
          log.logLineData.type = "DEBUG Statement:";
        }
      } else if (log.type === "unit") {
        log.isLine = false;
        log.isUnit = true;
      }
    });
  }
}
