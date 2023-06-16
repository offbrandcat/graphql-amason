const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    title: { type: String, 
      required: true 
    },
    rating: { type: Number, 
      required: true 
    },
    comment: { type: String, 
      required: true 
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;