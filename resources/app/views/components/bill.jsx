"use strict";

var featureToggle = require('config/toggles');
var ReserveConfirmation = require('./reserveConfirmation');

var Bill = React.createClass({
  render: function() {
    return(
      <div className="th">
        <img src={this.props.data["picture-link"]} alt="Conta" />
        <h2>{this.props.data["issued-by"]}</h2>
        <p>R$ {this.props.data["total-amount"]}</p>
        <p>Vencimento: {this.props.data["due-date"]}</p>
        {featureToggle.donateButton ? <ReserveConfirmation billId={this.props.data["bill-id"]} /> : null}
      </div>
    );
  }
});

module.exports = Bill;
