// import { Schema } from "mongoose";


import mongoose, {Schema} from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: 
        {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email: 
        {
            type: String,
            require: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

        fullname: 
        {
            type: String,
            require: true,
            trim: true,
            index: true
        },

        avatar: 
        {
            type: String,
            require: true,
        },

        coverImage: 
        {
            type: String,
        },

        watchHistory:
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'Video'
            }
        ],
        password:
            {
                type: String,
                require: [true, 'Password is Require']

            }

    
    }, {timestamps: true})

export const User = mongoose.model('User', userSchema)