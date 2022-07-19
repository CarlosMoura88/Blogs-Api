const throwNotExistError = (message) => {
  const err = new Error(message);
  err.name = 'NotExistError';
  throw err;
};

const throwUnauthorizedError = (message = 'Unauthorized user') => {
  const err = new Error(message);
  err.name = 'UnauthorizedError';
  throw err;
};

module.exports = {
  throwNotExistError,
  throwUnauthorizedError,
};