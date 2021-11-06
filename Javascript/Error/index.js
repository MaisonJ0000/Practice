const express = require('express');

const app = express();

class BadRequestError extends Error {}

app.listen(8082, () => {
  console.log('run');
})

app.get('/', (req, res, next) => {
  const e = new Error('hi');
  e.has = '33'
  throw e;
  console.log('here2');

});

app.use((err, req, res, next) => {
  console.log("[JONGMAN_LOG] here", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  next(err);
});
