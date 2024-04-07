import mongoose from 'mongoose';

const PhoneBookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    }
}) 

export const PhoneBook = mongoose.model('PhoneBook', PhoneBookSchema)

