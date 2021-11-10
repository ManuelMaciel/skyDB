import { create, connection, getById, getAll } from '../src/db'
// create('users', { fieldName: 'manuel' })
// connection('users')
// const getData = async () => {
//   const value = await getById('users','v2dw1efZ5a')
//   console.log(value)
// }

// getData()
const getAllData = async () => {
  const value = await getAll('users', {fieldName: 'jesus'})
  console.log(value)
}

getAllData()
