import { isObject } from 'util'

export interface Dict<T> {
  [key: string]: T
}

export function isDict (x: any): x is Dict<any> {
  if (x !== null && typeof x === 'object') {
    return true
  }
  return false
}
