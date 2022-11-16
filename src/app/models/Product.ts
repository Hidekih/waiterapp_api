import { model, Schema } from 'mongoose';

export const Product = model('Product', new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
    },
    imagePath: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    ingredients: {
        required: true,
        type: [{
            name: {
                type: String,
                required: true,
                trim: true
            },
            icon: {
                type: String,
                required: true,
            },
        }],
    },
    category: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Category'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}));
