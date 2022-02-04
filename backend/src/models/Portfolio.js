const mongoose = require('mongoose')
const slug = require('slug')
const { Schema } = mongoose;

const PortfolioSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    default: function() {
      return slug(this.title)
    }
  },
  description: 
  { 
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  technologies: [
    {
      label: String,
      icon: String,
      iconType: String
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('portfolio', PortfolioSchema)