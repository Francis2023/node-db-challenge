const server = require('./api/server.js');

const PORT = procees.env.PORT || 6999;

server.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});