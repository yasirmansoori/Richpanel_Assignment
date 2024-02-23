// Dependencies
const mongoose = require('mongoose');

// Page schema
const pageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  pageId: {
    type: String,
    required: true,
    unique: true,
  },
  facebookId: {
    type: String,
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
});

// Create the Page model
const Page = mongoose.model('Page', pageSchema);

// Export the model
module.exports = Page;
