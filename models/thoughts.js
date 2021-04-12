const {Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      replyId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      replyBody: {
        type: String,
        required: true,
        trim: true
      },
      writtenBy: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON:{
        getters: true
      }
    }
);

const ThoughtSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    thoughtText: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
    //   replies:[ReplySchema]
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
      },
      id: false
    });
    


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;