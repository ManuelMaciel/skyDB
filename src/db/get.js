import fs from 'fs-extra'

import { handleError } from '../../utils'
import { fullPath } from '../../constants'

export const get = async (model, id) => {
   // validations
   if(!model){
    return handleMessage('model is required')
  }
  if( typeof model !== 'string'){
    return handleMessage(`model must be of type "string" and the type provided is a ${typeof model}`)
  }
  if(!fs.existsSync(`${fullPath}/${model}.json`)){
    return handleMessage(`the model ${model} does not exist`)
  }
  //
  try {
    const storage = await fs.readJSON(`${fullPath}/${model}.json`)
    const record = await storage.find(record => record.id === id)
    return record
  } catch (error) {
    return handleError(error)
  }
}
