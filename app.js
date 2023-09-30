import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './src/routes.js';

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(cors());

const port = '4000';

routes.forEach(route => {
    app[route.method](route.resource, (req, res) => {
        if (route.auth) {
            const authCode = route.auth(req);
            if (!authCode) {
                try {
                    route.task(req).then((entity) => {
                        res.status(entity.code).send(entity.data);
                    });
                } catch(e) {
                    res.send(e);
                }
            } else {
                res.status(authCode)
                res.send();
            }
        } else {
            route.task(req).then((entity) => {
                res.status(entity.code).send(entity.data);
            });
        }
    })
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

