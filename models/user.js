const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true,
      dropDups: true
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['root'],
      required: true
    }
  },
  {
    toJSON: {
      virtuals: true
    },
    toObjects: {
      virtuals: true
    }
  }
)

UserSchema.plugin(mongoosePaginate)

const UserModel = mongoose.model('User', UserSchema)

module.exports = {
  model: UserModel,
  schema: UserSchema
}
