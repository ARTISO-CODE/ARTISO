const PORT = process.env.PORT || 8000;

module.exports = {
    BaseUrl: `http://localhost:${PORT}`,
    MONGO_URL: 'mongodb://localhost:27017/artisoDB'
}