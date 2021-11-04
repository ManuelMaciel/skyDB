import { homedir } from 'os'
import path from 'path'

const home = homedir()
export const fullPath = path.join(home, '/skyDB')
export const database = path.join(home, '/skyDB/db.json')
