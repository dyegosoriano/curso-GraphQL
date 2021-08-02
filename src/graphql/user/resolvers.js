const user = () => {
  return { id: '27', name: 'Dyego Soriano' }
}

const users = () => {
  return [
    { id: '3', name: 'Rebecca Soriano' },
    { id: '27', name: 'Dyego Soriano' }
  ]
}

export const userResolvers = {
  Query: { user, users }
}
