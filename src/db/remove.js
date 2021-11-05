import fs from 'fs-extra'

import { handleError } from '../../utils'
import { database } from '../../constants'

export const remove = async (id) => {
  try {
    const storage = await fs.readJSON(database)
    const oldRecord = storage.find((record) => record.id === id)
    const updateStorage = storage.filter((record) => record.id !== id)
    await fs.writeJSON(database, updateStorage)
    return oldRecord
  } catch (error) {
    return handleError(error)
  }
}
