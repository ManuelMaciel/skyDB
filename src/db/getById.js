import fs from 'fs-extra'

import { handleError, handleMessage } from '../utils'
import { fullPath } from '../constants'

export const getById = async (model, id) => {
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
  //
  try {
    let record;
    const storage = await fs.readJSON(`${fullPath}/${model}.json`)
    record = storage.find(record => record.id === id)
    // console.log(record)
    return record
  } catch (error) {
    return handleError(error)
  }
}
