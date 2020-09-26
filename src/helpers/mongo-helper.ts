export const MongoHelper = {
  map: (data: any): any => {
    const { _id, ...rest } = data
    return Object.assign({}, rest, { id: _id})
  }
}