import mongoose, { Schema } from "mongoose";

const VideoSchema = new mongoose.Schema({},{timestamps: true});

export const Video = mongoose.model('Video', VideoSchema)
