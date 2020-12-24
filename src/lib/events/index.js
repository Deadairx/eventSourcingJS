const OrderEvent = require("./OrderEvent");
const LoginEvent = require("./LoginEvent");
const saveEvents = require("./reducer");
const eventNames = require("./eventNames");

const makeLoginEvent = type => () => {
  return new LoginEvent({
    type
  });
};

const makeOrderEvent = type => (data = {}) => {
  const { orderId, isConfirmed } = data;
  const tmp = Object.assign({}, data);

  delete tmp.orderId;

  return new OrderEvent({
    type,
    orderId,
    data: tmp,
  });
};

const AttemptedLogin = makeLoginEvent(eventNames.AttemptedLogin);
const SuccessfulLogin = makeLoginEvent(eventNames.SuccessfulLogin);
const CreateOrder = makeLoginEvent(eventNames.CreateOrder);
const UpdateCustomerId = makeLoginEvent(eventNames.UpdateCustomerId);
const UpdateFirstName = makeLoginEvent(eventNames.UpdateFirstName);
const UpdateLastName = makeLoginEvent(eventNames.UpdateLastName);
const UpdateEmail = makeLoginEvent(eventNames.UpdateEmail);
const UpdateIsConfirmed = makeLoginEvent(eventNames.UpdateIsConfirmed);
const ConfirmedOrder = makeLoginEvent(eventNames.ConfirmedOrder);

module.exports = {
  AttemptedLogin,
  SuccessfulLogin,
  CreateOrder,
  UpdateCustomerId,
  UpdateFirstName,
  UpdateLastName,
  UpdateEmail,
  UpdateIsConfirmed,
  OrderEvent,
  LoginEvent,
  saveEvents,
  eventNames,
};
