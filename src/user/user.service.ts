import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User } from './user.model'
import { Model } from 'mongoose'
import { MongoHelper } from 'src/helpers/mongo-helper'

@Injectable()
export class UserService {
  constructor (
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {
  }

  async create (doc: User) {
    const result = await new this.userModel(doc).save()
    return result.id
  }

  async findById (id: number) {
    const user = await this.userModel.findById({ _id: id }).exec()
    return user
  }

  async getAll () {
    const results = await this.userModel.find({})
    console.log(results)
    return results && MongoHelper.map(results)
  }

  async update (user: User) {
    // ...
  }

  async remove (user: User) {
    // ...
  }
}