import fs from 'fs-extra'
import { fullPath } from '../../constants/index'
import { handleMessage, handleError } from '../../utils/index'

export const connection = async (model) => {
  // validations
  if(!model){
    return handleMessage('model is required')
  }
  if( typeof model !== 'string'){
    return handleMessage(`model must be of type "string" and the type provided is a ${typeof model}`)
  }
  //
  try {
    if (!fs.existsSync(fullPath)) {
      await fs.mkdir(fullPath)
    }
    if(!fs.existsSync(`${fullPath}/${model}.json`)){
      await fs.writeJSON(`${fullPath}/${model}.json`, [])
    }
    return handleMessage('skyDB: started!')
  } catch (error) {
    return handleError(error)
  }
}
