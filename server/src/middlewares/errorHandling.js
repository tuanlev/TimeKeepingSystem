const errorHandler = (err, req, res, next) => {
  console.error('Error occurred:', err.message);
  
  // Set the response status code based on the error type
  if (err.status) {
    res.status(err.status).json({
      success: false,
      message: err.message,
      error: err.stack
    });
  } else {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message
    });
  }
}