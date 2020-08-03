
let SpreadsheetQA = require("../qa/index");
let Tab = require("../tab/interface");
let RowInterface = require("../tab/row");

class UnitTestsInterface {

  /**
   * @param {SpreadsheetQA} qa;
   */
  constructor(qa) {
    this.qa = qa;

    /** @type {Tab<RowInterface>} */
    this.tab;
  }

  get spreadsheet() {
    return this.qa.spreadsheet;
  }

}

module.exports = UnitTestsInterface;