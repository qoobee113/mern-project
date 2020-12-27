const express = require('express');
const app = express();
const {DB_USER,DB_PASS,DB_NAME,PORT} = require('./config/index');
const mongoose = require('mongoose');
const logger = require('morgan');

//routes
const userRoutes = require('./routes/auth/user');
const adminRoutes = require('./routes/auth/admin');
const categoryRoute = require('./routes/category/category');
const productRoutes = require('./routes/product/product');

//connect database mongo
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.bjryp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
,
{
    useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true
}, () =>{
    console.log('✅ Connected database from mongodb');
});

//Middle ware
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use('/api/user',userRoutes);
app.use('/api/admin',adminRoutes);
app.use('/api/category',categoryRoute);
app.use('/api/product',productRoutes);

app.get('/', (req, res, next) => {
    return res.status(200).json({
      message: 'API Restfull!'
    })
  })

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
  })
  
  // Error handler function
  app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500
  
    // response to client
    return res.status(status).json({
      error: {
        message: error.message
      }
    })
  })

app.listen(PORT, () =>{
    console.log(`Rest API listening on port ${PORT}`);
})