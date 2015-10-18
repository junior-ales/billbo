"use strict";

var Bill = require('./bill');

var BillList = React.createClass({
  getInitialState: function() {
    return { bills: [] };
  },

  componentDidMount: function() {
    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', encodeURI(self.props.source));
    request.onload = function() {
      if (self.isMounted()) {
         self.setState({ bills: JSON.parse(request.responseText)});
      }
    };
    request.send();
  },

  render: function() {
    var onlyOpenBills = function(bill) {
      return bill["current-status"] === "open";
    };

    return(
      <ul className="small-block-grid-2 medium-block-grid-3">
        {this.state.bills.filter(onlyOpenBills).map(function(bill) {
          return <li key={"billId"+bill["bill-id"]}><Bill data={bill} /></li>;
        })}
      </ul>
    );
  }
});

module.exports = BillList;
