import DataLoader from 'dataloader'

export const makeDataLoader = getUsers => {
  return new DataLoader(async ids => {
    const urlIds = ids.join('&id=')

    const response = await getUsers(`?id=${urlIds}`)
    const users = await response.json()

    return ids.map(id => users.find(user => user.id === id))
  })
}
