import fs from 'fs-extra'

import { handleError, handleMessage } from '../../utils'
import { fullPath } from '../../constants'

export const update = async (model, id, options = {}) => {
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

    const existRecord = await storage.find((record) => record.id === id)

    const existRecordIndex = await storage.findIndex((record) => record.id === id)

    const newRecord = {
      ...existRecord,
      ...options,
      id
    }

    const updatedStorage = [
      ...storage.slice(0, existRecordIndex),
      newRecord,
      ...storage.slice(existRecordIndex + 1)
    ]
    console.log("updatedStorage: ",updatedStorage)
    await fs.writeJSON(`${fullPath}/${model}.json`, updatedStorage)

    return newRecord
  } catch (error) {
    return handleError(error)
  }
}
