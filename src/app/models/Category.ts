import { model, Schema } from 'mongoose';

export const Category = model('Category', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    icon: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}));
