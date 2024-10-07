import { LightningElement, track, api } from "lwc";
let IdBase = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
const setSize = 100;
const columns = [
  {
    fieldName: "name",
    label: "Name",
    classComb: "slds-is-resizable slds-cell_action-mode name-col"
  },
  {
    fieldName: "type",
    label: "Type",
    classComb: "slds-is-resizable slds-cell_action-mode type-col"
  },
  {
    fieldName: "hasError",
    label: "hasError",
    classComb: "slds-is-resizable slds-cell_action-mode error-col"
  }
];
class CUHierarchy {
  Id;
  Name;
  Type;
  hasError;
  children = [];
  constructor(name, type) {
    this.Id = IdBase++;
    this.Name = name;
    this.Type = type;
    this.hasError = false;
  }
}

class TreeNode {
  Id;
  name;
  type;
  hasError;
  hasChild;
  isExpanded;
  isSelected;
  level;
  posinset;
  setsize;
  classComb;
  parents;
  constructor(id, name, type, hasError, parentId) {
    this.Id = id;
    this.name = name;
    this.type = type;
    this.hasError = hasError;
    this.hasChild = false;
    this.isExpanded = true;
    this.isSelected = false;
    this.level = 1;
    this.posinset = 1;
    this.setsize = setSize;
    this.classComb = "slds-hint-parent";
    this.parents = parentId + "|";
  }
}
const initialExpandedRows = ["123556"];

const codeunits = [
  {
    codeUnitName: "apexLogTryController",
    codeUnitType: "Class",
    executedLinesAndSubUnits: [
      {
        codeUnit: {
          classId: "01pdM000006G137",
          codeUnitName: "apexLogTryController",
          codeUnitType: "Class",
          executedLinesAndSubUnits: [
            {
              methodUnit: {
                classId: "01pdM000006G137",
                executedLinesAndSubUnits: [],
                methodName: "apexLogTryController()",
                methodTitle: "apexLogTryController.apexLogTryController()"
              }
            },
            {
              logLine: {
                isVarAccessible: false,
                isVarStatic: false,
                lineNumber: "[4]",
                type: "VARIN",
                varName: "base64Data",
                varType: "String"
              }
            },
            {
              logLine: {
                lineNumber: "[4]",
                type: "VARAS",
                varName: "base64Data",
                varValue: '"\\"61.0 APEX_CODE,FINE (6302 more) ..."'
              }
            },
            {
              logLine: {
                isVarAccessible: false,
                isVarStatic: false,
                lineNumber: "[97]",
                type: "VARIN",
                varName: "pair",
                varType: "String"
              }
            },
            {
              logLine: {
                lineNumber: "[97]",
                type: "VARAS",
                varName: "pair",
                varValue: '"DB,INFO"'
              }
            },
            {
              logLine: {
                isVarAccessible: true,
                isVarStatic: false,
                lineNumber: "[98]",
                type: "VARIN",
                varName: "temp",
                varType: "List<String>"
              }
            },
            {
              logLine: {
                lineNumber: "[98]",
                type: "VARAS",
                varName: "temp",
                varValue: '["DB","INFO"]'
              }
            },
            {
              logLine: {
                lineNumber: "[98]",
                type: "VARAS",
                varName: "temp",
                varValue: '["DB","INFO"]'
              }
            },
            {
              logLine: {
                isVarAccessible: false,
                isVarStatic: false,
                lineNumber: "[24]",
                type: "VARIN",
                varName: "currentLine",
                varType: "String"
              }
            },
            {
              logLine: {
                lineNumber: "[24]",
                type: "VARAS",
                varName: "currentLine",
                varValue: '"  Number of Mobile A (27 more) ..."'
              }
            },
            {
              logLine: {
                lineNumber: "[25]",
                loggingLevel: "DEBUG",
                type: "DEBUG",
                userDebugMessage:
                  "ANALYZING LINE NUMBER:> 57 >>>   Number of Mobile Apex push calls: 0 out of 10"
              }
            },
            {
              methodUnit: {
                classId: "01pdM000006G137",
                executedLinesAndSubUnits: [
                  {
                    logLine: {
                      isVarAccessible: false,
                      isVarStatic: false,
                      lineNumber: "[39]",
                      type: "VARIN",
                      varName: "line",
                      varType: "String"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[39]",
                      type: "VARAS",
                      varName: "line",
                      varValue: '"  Number of Mobile A (27 more) ..."'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[40]",
                      type: "VARIN",
                      varName: "execAnRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[41]",
                      type: "VARIN",
                      varName: "standExpRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[44]",
                      type: "VARIN",
                      varName: "execAnMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x75730d53"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x75730d53"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[45]",
                      type: "VARIN",
                      varName: "standExpMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x5e5517d5"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x5e5517d5"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[55]",
                      loggingLevel: "DEBUG",
                      type: "DEBUG",
                      userDebugMessage:
                        "LEVEL ONE CHECK::::NO PATTERN MATCHED FOR THE LINE ;;;"
                    }
                  }
                ],
                methodName: "levelOneCheck(String)",
                methodTitle: "apexLogTryController.levelOneCheck(String)"
              }
            },
            {
              logLine: {
                lineNumber: "[21]",
                type: "VARAS",
                varName: "line",
                varValue: "58"
              }
            },
            {
              logLine: {
                isVarAccessible: false,
                isVarStatic: false,
                lineNumber: "[24]",
                type: "VARIN",
                varName: "currentLine",
                varType: "String"
              }
            },
            {
              logLine: {
                lineNumber: "[24]",
                type: "VARAS",
                varName: "currentLine",
                varValue: '""'
              }
            },
            {
              logLine: {
                lineNumber: "[25]",
                loggingLevel: "DEBUG",
                type: "DEBUG",
                userDebugMessage: "ANALYZING LINE NUMBER:> 58 >>> "
              }
            },
            {
              methodUnit: {
                classId: "01pdM000006G137",
                executedLinesAndSubUnits: [
                  {
                    logLine: {
                      isVarAccessible: false,
                      isVarStatic: false,
                      lineNumber: "[39]",
                      type: "VARIN",
                      varName: "line",
                      varType: "String"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[39]",
                      type: "VARAS",
                      varName: "line",
                      varValue: '""'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[40]",
                      type: "VARIN",
                      varName: "execAnRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[41]",
                      type: "VARIN",
                      varName: "standExpRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[44]",
                      type: "VARIN",
                      varName: "execAnMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x79ce1bfb"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x79ce1bfb"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[45]",
                      type: "VARIN",
                      varName: "standExpMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x3b419da4"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x3b419da4"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[55]",
                      loggingLevel: "DEBUG",
                      type: "DEBUG",
                      userDebugMessage:
                        "LEVEL ONE CHECK::::NO PATTERN MATCHED FOR THE LINE ;;;"
                    }
                  }
                ],
                methodName: "levelOneCheck(String)",
                methodTitle: "apexLogTryController.levelOneCheck(String)"
              }
            },
            {
              logLine: {
                lineNumber: "[21]",
                type: "VARAS",
                varName: "line",
                varValue: "59"
              }
            },
            {
              logLine: {
                isVarAccessible: false,
                isVarStatic: false,
                lineNumber: "[24]",
                type: "VARIN",
                varName: "currentLine",
                varType: "String"
              }
            },
            {
              logLine: {
                lineNumber: "[24]",
                type: "VARAS",
                varName: "currentLine",
                varValue: '"20:37:58.8 (8992214) (27 more) ..."'
              }
            },
            {
              logLine: {
                lineNumber: "[25]",
                loggingLevel: "DEBUG",
                type: "DEBUG",
                userDebugMessage:
                  "ANALYZING LINE NUMBER:> 59 >>> 20:37:58.8 (8992214)|CUMULATIVE_LIMIT_USAGE_END"
              }
            },
            {
              methodUnit: {
                classId: "01pdM000006G137",
                executedLinesAndSubUnits: [
                  {
                    logLine: {
                      isVarAccessible: false,
                      isVarStatic: false,
                      lineNumber: "[39]",
                      type: "VARIN",
                      varName: "line",
                      varType: "String"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[39]",
                      type: "VARAS",
                      varName: "line",
                      varValue: '"20:37:58.8 (8992214) (27 more) ..."'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[40]",
                      type: "VARIN",
                      varName: "execAnRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[40]",
                      type: "VARAS",
                      varName: "execAnRegex",
                      varValue: '{"delegate":"0x632dffcd"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.compile(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[41]",
                      type: "VARIN",
                      varName: "standExpRegex",
                      varType: "System.Pattern"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[41]",
                      type: "VARAS",
                      varName: "standExpRegex",
                      varValue: '{"delegate":"0x78dd05d6"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[44]",
                      type: "VARIN",
                      varName: "execAnMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x483b29d5"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[44]",
                      type: "VARAS",
                      varName: "execAnMatcher",
                      varValue: '{"delegate":"0x483b29d5"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Pattern.matcher(String)",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      isVarAccessible: true,
                      isVarStatic: false,
                      lineNumber: "[45]",
                      type: "VARIN",
                      varName: "standExpMatcher",
                      varType: "System.Matcher"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x78a24459"}'
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[45]",
                      type: "VARAS",
                      varName: "standExpMatcher",
                      varValue: '{"delegate":"0x78a24459"}'
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    methodUnit: {
                      executedLinesAndSubUnits: [],
                      methodName: "System.Matcher.find()",
                      methodTitle: "System Method"
                    }
                  },
                  {
                    logLine: {
                      lineNumber: "[52]",
                      loggingLevel: "DEBUG",
                      type: "DEBUG",
                      userDebugMessage:
                        "LEVEL ONE CHECK::::STANDARD EXPRESSION LINE LINE ;;;"
                    }
                  }
                ],
                methodName: "levelOneCheck(String)",
                methodTitle: "apexLogTryController.levelOneCheck(String)"
              }
            },
            {
              logLine: {
                lineNumber: "[21]",
                type: "VARAS",
                varName: "line",
                varValue: "60"
              }
            }
          ],
          isTrigger: false,
          methodExecuting: "saveFile(String)"
        }
      }
    ],
    isTrigger: false,
    methodExecuting: "ACTION$saveFile"
  },
  {
    codeUnitName: "apexLogTryController",
    codeUnitType: "Class",
    executedLinesAndSubUnits: [
      {
        codeUnit: {
          classId: "01pdM000006G137",
          codeUnitName: "apexLogTryController",
          codeUnitType: "Class",
          executedLinesAndSubUnits: [
            {
              methodUnit: {
                classId: "01pdM000006G137",
                executedLinesAndSubUnits: [],
                methodName: "apexLogTryController()",
                methodTitle: "apexLogTryController.apexLogTryController()"
              }
            }
          ],
          isTrigger: false,
          methodExecuting: "saveFile(String)"
        }
      }
    ],
    isTrigger: false,
    methodExecuting: "ACTION$saveFile"
  }
];

class LogLine {
  Id;
  type;
  logLineData;
  name;
  unitId;
  constructor(type, data, name, unitid) {
    this.Id = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    this.type = type;
    this.logLineData = data;
    this.name = name;
    this.unitId = unitid;
  }
}

export default class Treegridtest extends LightningElement {
  idLimitMin = IdBase;
  idLimitMax;
  TreeNodeLogs = new Map();
  @track columns = columns;
  @track treeNodes = [];
  @track test = [
    {
      a: "102",
      b: false
    }
  ];
  logViewCol = 6;
  currentLogId;
  currentLogIdx = 0;
  setLogViewCol() {
    this.logViewCol = 12;
  }
  get detailedLogViewDisplay() {
    return this.logViewCol === 6 ? true : false;
  }
  openLogViewer(event) {
    const codeUnitId = event.currentTarget.dataset.unqid;
    console.log(
      "CodeUnit clicked, Id: ",
      codeUnitId,
      " Opening detailed log for this Id"
    );
    this.logViewCol = 6;
    this.currentLogId = codeUnitId;
  }
  setSelectedTreeNode(event) {
    this.test[0].a = this.test[0].a === "102" ? "103" : "102";
    console.log("Selected Log idx: ", event.detail);
    if (this.treeNodes !== null && this.treeNodes !== undefined) {
      this.treeNodes[this.currentLogIdx].isSelected = false;
      this.currentLogIdx = event.detail;
      this.treeNodes[this.currentLogIdx].isSelected = true;
    }
  }
  cuInHierarchy = [];
  connectedCallback() {
    //prepare cuInHierarchy from codeunit data
    codeunits.forEach((cu) => {
      const parent = new CUHierarchy(cu.codeUnitName, cu.codeUnitType);
      this.getChildren(cu.executedLinesAndSubUnits, parent);
      this.cuInHierarchy.push(parent);
    });
    //prepare TreeNodes from cuInHierarchy
    const level = 1;
    let posinset = 1;
    this.cuInHierarchy.forEach((row) => {
      this.generateTreeNodes(row, level, posinset, "");
      posinset++;
    });
    this.idLimitMax = this.idLimitMin + this.treeNodes.length - 1;
  }
  renderTrack = false;
  renderedCallback() {
    if (this.renderTrack) {
      console.log("Rendering again");
    } else {
      this.renderTrack = true;
      console.log("First render");
    }
  }
  generateTreeNodes(row, level, posinset, parentId) {
    const fRow = new TreeNode(
      row.Id,
      row.Name,
      row.Type,
      row.hasError,
      parentId
    );
    //Recurrsion Base condition
    if (
      row.children === null ||
      row.children === undefined ||
      row.children.length === 0
    ) {
      fRow.posinset = posinset;
      fRow.level = level;
      fRow.hasChild = false;
      this.treeNodes.push(fRow);
      return;
    }

    //Process logic if not satisfied base condition
    fRow.posinset = posinset;
    fRow.level = level;
    fRow.hasChild = true;
    const children = row.children;
    let idx = 1;
    this.treeNodes.push(fRow);
    children.forEach((child) => {
      // console.log("Parent id", fRow.parents);
      this.generateTreeNodes(child, level + 1, idx, fRow.parents + row.Id);
      idx++;
    });
  }
  getChildren(elss, parent) {
    //baseConditon
    if (elss === null || elss === undefined || elss.length === 0) {
      //no children return empty array
      parent.children = [];
      return;
    }

    // console.log("Elss Size", elss.length);
    elss.forEach((unit) => {
      if (unit.codeUnit) {
        const res = new CUHierarchy(
          unit.codeUnit.codeUnitName,
          unit.codeUnit.codeUnitType
        );
        // console.log("Code unit captured", unit.codeUnit.codeUnitName);
        parent.children.push(res);
        this.pushToTreeNodeLogs(parent.Id, null, "unit", res.Name, res.Id);
        this.getChildren(unit.codeUnit.executedLinesAndSubUnits, res);
      } else if (unit.methodUnit) {
        const res = new CUHierarchy(unit.methodUnit.methodName, "Method");
        // console.log("Method unit captured ", unit.methodUnit.methodName);
        parent.children.push(res);
        this.pushToTreeNodeLogs(parent.Id, null, "unit", res.Name, res.Id);
        this.getChildren(unit.methodUnit.executedLinesAndSubUnits, res);
        // console.log("Child node res: ", res);
      } else if (unit.logLine) {
        // console.log("Log parentId", parent.Id);
        this.pushToTreeNodeLogs(parent.Id, unit.logLine, "line", null, null);
      }
    });
  }

  pushToTreeNodeLogs(parentId, data, type, name, unitId) {
    if (this.TreeNodeLogs.has(parentId)) {
      let logData = this.TreeNodeLogs.get(parentId);
      if (type === "unit") {
        const newLine = new LogLine(type, null, name, unitId);
        logData.push(newLine);
        this.TreeNodeLogs.set(parentId, logData);
      } else if (type === "line") {
        const newLine = new LogLine(type, data, null, null);
        logData.push(newLine);
        this.TreeNodeLogs.set(parentId, logData);
      }
    } else {
      if (type === "line") {
        const temp = [];
        const newLine = new LogLine(type, data, null, null);
        temp.push(newLine);
        this.TreeNodeLogs.set(parentId, temp);
      } else if (type === "unit") {
        const temp = [];
        const newLine = new LogLine(type, null, name, unitId);
        temp.push(newLine);
        this.TreeNodeLogs.set(parentId, temp);
      }
    }
  }
  get treeNodeRenderer() {
    console.log("Getting latest verison");
    return this.treeNodes;
  }
  handleToggle(event) {
    this.test[0].a = this.test[0].a === "102" ? "103" : "102";
    // console.log(JSON.stringify(this.test));
    const element = event.target;
    const id = element.dataset.id;
    const isExpanded = element.dataset.expanded;
    console.log("Data Id:", id, " IsExpanded: ", isExpanded);
    this.treeNodes.forEach((row) => {
      if (row.parents.includes(id)) {
        if (isExpanded === "true") {
          row.classComb = "slds-hint-parent slds-hide";
          row.isExpanded = false;
        } else {
          row.classComb = "slds-hint-parent";
          row.isExpanded = true;
        }
      }
      if (row.Id.toString() === id) {
        row.isExpanded = !row.isExpanded;
      }
    });
  }
}
