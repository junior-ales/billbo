"use strict";

var Bill = React.createClass({
  render: function() {
    return(
      <a className="th" href="#">
        <img src="http://placehold.it/300x400?text=Conta" alt="Conta" />
        <h2>{this.props.data["issued-by"]}</h2>
        <p>R$ {this.props.data["total-amount"]}</p>
        <p>Vencimento: {this.props.data["due-date"]}</p>
      </a>
    );
  }
});

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
    return(
      <ul className="small-block-grid-2 medium-block-grid-3">
        {this.state.bills.map(function(bill) {
          return <li key={"billId"+bill["bill-id"]}><Bill data={bill} /></li>;
        })}
      </ul>
    );
  }
});

module.exports = BillList;
