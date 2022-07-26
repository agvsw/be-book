import Express from 'express';
import bodyParser from 'body-parser';
import BookRouter from './src/controllers/route'

const app = Express();
const port = 80;

app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});

BookRouter.routesConfig(app);


app.listen(port, () => console.log(`App listening on port ${port}`));

