import fs from 'fs-extra'

import { handleError, genId } from '../../utils'
import { database } from '../../constants'

export const create = async (options = {}) => {
  try {
    const storage = await fs.readJSON(database)

    const updateOptions = {
      ...options,
      id: genId
    }

    await fs.writeJSON(database, [...storage, updateOptions])
  } catch (error) {
    return handleError(error)
  }
}
