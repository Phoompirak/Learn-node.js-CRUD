const mongoose = require('mongoose');

const password = 'XXstgmajizbcDt49';

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://Phoom_300x:${password}@phoom300x.jdnhq8p.mongodb.net/`)
        .then(() => {
            console.log("DB Connected!")
        })
        .catch((err) => console.error(err))
}

module.exports = connectDB