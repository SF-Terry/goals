import { storeName } from './initialState'


export const getLocalStore = () => {
  try {
    return JSON.parse(localStorage[storeName])
  } catch (e) {
    return {}
  }
}

export const setLocalStore = (object) => {
  localStorage[storeName] = JSON.stringify(object)
}