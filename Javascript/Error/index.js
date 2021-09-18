const express = require('express');

const app = express();

class BadRequestError extends Error();

app.listen(3000, () => {
  console.log('run');
})

app.get('/', async (req, res, next) => {
  await poolRequery(q);


});

app.use((err, req, res, next) => {
  console.log("[JONGMAN_LOG] here", new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[1].slice(0, -1));
  next(err);
});
