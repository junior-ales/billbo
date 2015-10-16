"use strict";

var BillList = require('./components/billList');

var App = {
  init: function() {
    ReactDOM.render(<BillList source="/bills" />, document.getElementById("bill-list"));
  }
};

module.exports = App;
