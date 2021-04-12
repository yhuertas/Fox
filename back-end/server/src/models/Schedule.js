const { Schema, model } = require('mongoose');

const scheduleSechema = new Schema({
    tipo: { type: String, required: true },
    fecha: { type: Date, required: true },
    hour: { type: Date, required: true },
    requester: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Schedule', scheduleSechema)
