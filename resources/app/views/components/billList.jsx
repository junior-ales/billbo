"use strict";

var Bill = React.createClass({
  render: function() {
    return(
      <a className="th" href="#">
        <img src="http://placehold.it/300x400?text=Conta" alt="Conta" />
      </a>
    );
  }
});

var BillList = React.createClass({
  render: function() {
    var bills = [];
    for (var i = 0; i < 12; i++) {
      bills.push(<li key={'id' + i}><Bill /></li>);
    }

    return(
      <ul className="small-block-grid-2 medium-block-grid-3">
        {bills}
      </ul>
    );
  }
});

module.exports = BillList;
