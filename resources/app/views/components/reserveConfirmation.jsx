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

module.exports = ReserveConfirmation;
