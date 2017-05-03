var express = require('express');
var path = require('path');

var app = express();

var port = 5000;
var publicPath = path.resolve(__dirname, 'dist');

app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'), (err) => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
  });
});

// And run the server
app.listen(port, function () {
  console.log('Server running on port ' + port);
});