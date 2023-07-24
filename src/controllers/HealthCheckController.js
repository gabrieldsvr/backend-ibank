 async function healthCheck(req, res) {
    res.json({ status: 'API is up and running!' });
}
module.exports = {
    healthCheck: healthCheck
};