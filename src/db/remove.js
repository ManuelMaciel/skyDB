import fs from 'fs-extra'

import { handleError, handleMessage } from '../../utils'
import { fullPath } from '../../constants'


export const remove = async (model, id) => {
  // validations
  if(!model){
  return handleMessage('model is required')
  }
  if(!id){
    return handleMessage('id is required')
  }
  if( typeof model !== 'string'){
    return handleMessage(`model must be of type "string" and the type provided is a ${typeof model}`)
  }
  if( typeof id !== 'string'){
    return handleMessage(`id must be of type "string" and the type provided is a ${typeof id}`)
  }
  if(!fs.existsSync(`${fullPath}/${model}.json`)){
    return handleMessage(`the model ${model} does not exist`)
  }
  try {
    const storage = await fs.readJSON(`${fullPath}/${model}.json`)

    const oldRecord = storage.find((record) => record.id === id)

    const updateStorage = storage.filter((record) => record.id !== id)

    await fs.writeJSON(`${fullPath}/${model}.json`, updateStorage)

    return oldRecord
  } catch (error) {
    return handleError(error)
  }
}
