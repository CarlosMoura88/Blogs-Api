const express = require('express');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const loginRoute = require('./routes/loginRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const blogPostRoute = require('./routes/blogPostRoute');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoryRoute);

app.use('/post', blogPostRoute);

app.use(errorHandlerMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
