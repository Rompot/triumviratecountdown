import express from 'express';
import path from 'path';

const app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
  res.send('Days until Liver Destruction...');
});

app.listen(app.get('port'), () => {
  console.log(`triumviratecountdown listening on port ${app.get('port')}`);
});
