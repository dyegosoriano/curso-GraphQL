const post = () => {
  return { id: '0', title: 'Título 01' }
}

const posts = () => {
  return [
    { id: '1', title: 'Título 01' },
    { id: '2', title: 'Título 02' },
    { id: '3', title: 'Título 03' },
    { id: '4', title: 'Título 04' },
    { id: '5', title: 'Título 05' }
  ]
}

export const postResolvers = {
  Query: { post, posts }
}
