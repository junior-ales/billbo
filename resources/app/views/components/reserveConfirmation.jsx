'use strict';

var request = require('model/request');
var Reservation = require('model/reservation');

var ReserveConfirmation = React.createClass({
  propTypes: {
    billId: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return { modalVisible: false };
  },

  handleDonateClick: function() {
    this.setState({ modalVisible: true });
  },

  handleCloseModal: function(e) {
    e.preventDefault();
    this.setState({ modalVisible: false });
  },

  handleConfirmDonation: function(e) {
    e.preventDefault();
    var name = this.refs.donatorName;
    var email = this.refs.donatorEmail;
    var reservation = new Reservation(this.props.billId, name.value, email.value);

    if (reservation.isValid()) {
      request.post('/reservation/new', {
        data: reservation,
        success: function() {
          name.value = '';
          email.value = '';
          console.log('Reserva realizada com sucesso');
        }
      });
    }

    this.setState({ modalVisible: false });
  },

  render: function() {
    var modalClass = 'reserve-confirmation__modal';
    if (this.state.modalVisible) {
      modalClass+= '--active';
    }

    return(
      <article className='reserve-confirmation'>
        <button onClick={this.handleDonateClick}>Doar</button>
        <div className={modalClass}>
          <form className='reserve-confirmation__modal__content'>
            <h2>Doar</h2>
            <label>Nome:
              <input type='text' ref='donatorName' placeholder='(Opcional)' />
            </label>
            <label>Email:
              <input type='email' ref='donatorEmail' />
            </label>
            <button onClick={this.handleConfirmDonation}>confirmar</button>
            <button className='secondary' onClick={this.handleCloseModal}>cancelar</button>
          </form>
        </div>
      </article>
    );
  }
});

module.exports = ReserveConfirmation;
