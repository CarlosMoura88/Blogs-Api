const errors = {
  ValidationError: 400,
  UnauthorizedError: 401, 
  NotExistError: 404,
  AlreadyExistsError: 409,  
};

const errorHandlerMiddleware = ({ name, message }, _req, res, _next) => {
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

module.exports = errorHandlerMiddleware;