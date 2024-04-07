const mongoose = require('mongoose');

// สร้างตารางเก็บข้อมูล
const productSchema = mongoose.Schema({
    name: String,
    detail: {
        type: String
    },
    price: {
        type: Number
    },
    update_at: { type: Date, default: Date.now }
}, { timestamp: true})

module.exports = mongoose.model('products', productSchema);