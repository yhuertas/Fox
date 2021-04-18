//El modelo es la definición de los diferentes objetos que serán tratados en el API. Diseño de objetos

const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    isShown: {type:Boolean}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Customer', customerSchema)
