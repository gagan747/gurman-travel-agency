const path = require('path')
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
 res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

process.on('uncaughtException', (ex) => {
 console.log('We got uncaught exception', ex);
});
app.use((err, req, res, next) => {
 console.error(err);
 res.status(500).json({ message: `${err}` });
});
app.listen(process.env.PORT || 5000, () => {
 console.log(`Listening on port ${process.env.PORT || 5000}...`)
});
