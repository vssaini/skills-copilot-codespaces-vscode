// Create web server
// 1. Create web server
// 2. Create router
// 3. Create route
// 4. Create handler
// 5. Send response

// 1. Create web server
const express = require('express');
const app = express();

// 2. Create router
const router = require('./routes/comments');

// 3. Create route
app.use('/comments', router);

app.listen(3000, () => console.log('Server started on port 3000'));
