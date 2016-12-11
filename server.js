import express from 'express';

const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
  res.send('Days until Liver Destruction...');
});

app.listen(app.get('port'), () => {
  console.log(`triumviratecountdown listening on port ${app.get('port')}`);
});
