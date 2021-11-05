import fs from 'fs-extra'
import { database, fullPath } from '../../constants/index'
import { handleMessage, handleError } from '../../utils/index'

export const connection = async () => {
  try {
    if (!fs.existsSync(fullPath)) {
      await fs.mkdir(fullPath)
      await fs.writeJSON(database, [])
    }
    return handleMessage('skyDB: started!')
  } catch (error) {
    return handleError(error)
  }
}
