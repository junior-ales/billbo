"use strict";

var ReserveConfirmation = React.createClass({
  getInitialState: function() {
    return { modalVisible: false };
  },

  handleDonateClick: function() {
    this.setState({ modalVisible: true });
  },

  handleCloseModal: function() {
    this.setState({ modalVisible: false });
  },

  handleConfirmDonation: function() {
    this.setState({ modalVisible: false });
  },

  render: function() {
    var modalClass = "reserve-confirmation__modal";
    if (this.state.modalVisible) {
      modalClass+= "--active";
    }

    return(
      <article className="reserve-confirmation">
        <button onClick={this.handleDonateClick}>Doar</button>
        <div className={modalClass}>
          <div className="reserve-confirmation__modal__content">
            <h2>Doar</h2>
            <input type="email" />
            <button onClick={this.handleConfirmDonation}>confirmar</button>
            <button className="secondary" onClick={this.handleCloseModal}>cancelar</button>
          </div>
        </div>
      </article>
    );
  }
});

var Bill = React.createClass({
  render: function() {
    return(
      <div className="th">
        <img src={this.props.data["picture-link"]} alt="Conta" />
        <h2>{this.props.data["issued-by"]}</h2>
        <p>R$ {this.props.data["total-amount"]}</p>
        <p>Vencimento: {this.props.data["due-date"]}</p>
        <ReserveConfirmation />
      </div>
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
