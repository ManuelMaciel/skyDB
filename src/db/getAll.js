import fs from 'fs-extra'

import { handleError } from '../../utils'
import { fullPath } from '../../constants'

export const getAll = async (model, where = {}) => {
  // validations
  if(!model){
    return handleMessage('model is required')
  }
  if( typeof model !== 'string'){
    return handleMessage(`model must be of type "string" and the type provided is a ${typeof model}`)
  }
  if( typeof where !== 'object'){
    return handleMessage(`where must be of type "object" and the type provided is a ${typeof where}`)
  }
  if(!fs.existsSync(`${fullPath}/${model}.json`)){
    return handleMessage(`the model ${model} does not exist`)
  }
  //
  try {
    let record;
    const storage = await fs.readJSON(`${fullPath}/${model}.json`)
    record = storage
    if(where){
      record = record.filter(record => {
        return Object.keys(where).every(filter => {
            return where[filter] === record[filter]
        });
      })
    }
    return record
  } catch (error) {
    return handleError(error)
  }
}
