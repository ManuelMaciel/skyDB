import fs from 'fs-extra'

import { handleError, handleMessage } from '../../utils'
import { fullPath } from '../../constants'

export const getAll = async (model, options) => {
  // validations
  if(!model){
    return handleMessage('model is required')
  }
  if( typeof model !== 'string'){
    return handleMessage(`model must be of type "string" and the type provided is a ${typeof model}`)
  }
  if( typeof options !== 'object'){
    return handleMessage(`options must be of type "object" and the type provided is a ${typeof options}`)
  }
  if(!fs.existsSync(`${fullPath}/${model}.json`)){
    return handleMessage(`the model ${model} does not exist`)
  }
  //
  try {
    const storage = await fs.readJSON(`${fullPath}/${model}.json`)
    let record = storage
    // where
    if(options.where){
      record = record.filter(record => {
        return Object.keys(options.where).every(filter => {
            return options.where[filter] === record[filter]
        });
      })
    }
    // order by
    if(options.order){
      if(options.order[0] === 'ASC' || options.order[0] === 'asc') {
        record = record.sort((a, b) => {
          return (a[options.order[1]] > b[options.order[1]]) ? 1 : -1
        })
      } else if (options.order[0] === 'DESC' || options.order[0] === 'desc') {
        record = record.sort((a, b) => {
          return (a[options.order[1]] > b[options.order[1]]) ? -1 : 1

        })
      }
    }
    return record
  } catch (error) {
    return handleError(error)
  }
}
