export const getLocalStorageData = (storageKey) => {
  try {
    const data = localStorage.getItem(storageKey)

    if (data === null) return undefined

    return JSON.parse(data)
  } catch (error) {
    console.error(error)
    return undefined
  }
}

export const setLocalStorageData = (storageKey, data) => {
  try {
    const stringifiedData = JSON.stringify(data)
    localStorage.setItem(storageKey, stringifiedData)
  } catch (error) {
    console.error(error)
  }
}
