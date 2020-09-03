import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  active: { type: Boolean, required: true }
})

export interface User {
  id: string
  name: string
  lastName: string
  age: number
  active: boolean
}
