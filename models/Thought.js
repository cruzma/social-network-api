const {Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
    {
      reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        trim: true
      },
      username: {
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
        trim: true,
        ref: 'User'
    },
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      replies:[ReactionSchema]
    },
    {
      toJSON: {
        getters: true,
        virtuals: true
      },
      id: false
    });
    


const Thought = model('Thought', ThoughtSchema);

  // get total count of friends on retrieval
  ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

module.exports = Thought;