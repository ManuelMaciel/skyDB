import fs from 'fs-extra'
import { database } from '../../constants'
import { handleError } from '../../utils'

export const update = async (id, options = {}) => {
  try {
    const storage = await fs.readJSON(database)
    const existRecord = storage.find((record) => record.id === id)
    const existRecordIndex = storage.findIndex((record) => record.id === id)

    const newRecord = {
      ...existRecord,
      ...options,
      id: existRecordIndex.id
    }
    const updatedStorage = [
      ...storage.slice(0, existRecordIndex),
      newRecord,
      ...storage.slice(existRecordIndex + 1)
    ]
    await fs.writeJSON(storage, updatedStorage)

    return newRecord
  } catch (error) {
    return handleError(error)
  }
}
