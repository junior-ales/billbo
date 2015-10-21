'use strict';

function Reservation(billId, donatorName, donatorEmail) {
  if (!(this instanceof Reservation)) {
    return new Reservation(billId, donatorName, donatorEmail);
  }

  Object.defineProperty(this, 'billId', {
    value: billId,
    enumerable: true,
    writable: false
  });

  Object.defineProperty(this, 'donatorName', {
    value: donatorName,
    enumerable: true,
    writable: false
  });

  Object.defineProperty(this, 'donatorEmail', {
    value: donatorEmail,
    enumerable: true,
    writable: false
  });

  Object.defineProperty(this, 'isValid', {
    value: function() {
      return !!this.billId && !!this.donatorEmail;
    },
    writable: false
  });
};

module.exports = Reservation;
