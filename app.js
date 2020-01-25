const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Express World!');
});

app.get('/418', (req, res) => {
	res.set('X-note', '418');
	res.status(418);
	res.send('418');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
