const server = require('./api/server');

const port = procees.env.PORT || 6999;

server.listen(port, () => {
    console.log(`running on port ${port}`);
});