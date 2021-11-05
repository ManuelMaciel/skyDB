import fs from 'fs-extra'

import { handleError } from '../../utils'
import { database } from '../../constants'

export const get = async (id) => {
  try {
    const storage = await fs.readJSON(database)
    const record = storage.find((record) => record.id === id)
    return record
  } catch (error) {
    return handleError(error)
  }
}
