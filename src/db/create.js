import fs from 'fs-extra'

import { handleError, handleMessage, genId } from '../utils'
import { fullPath } from '../constants'

export const create = async (model, options = {}) => {
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

    const updateOptions = {
      ...options,
      id: genId(10),
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
      deletedAt: ''
    }
    await fs.writeJSON(`${fullPath}/${model}.json`, [...storage, updateOptions])
  } catch (error) {
    return handleError(error)
  }
}
