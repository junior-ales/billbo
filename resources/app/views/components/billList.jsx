"use strict";

var Bill = require('./bill');
var request = require('model/request');

var BillList = React.createClass({
  getInitialState: function() {
    return { bills: [] };
  },

  componentDidMount: function() {
    var self = this;

    request.get(self.props.source, {
      success: function(responseText) {
        if (self.isMounted()) {
           self.setState({ bills: JSON.parse(responseText) });
        }
      }
    });
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
