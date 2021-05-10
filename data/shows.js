import { fetchAPI } from 'data/graphcms'

export async function getAllShowsForHome(preview, orderBy = 'publishedAt_DESC') {
  const data = await fetchAPI(`
    {
      shows(orderBy: ${orderBy}) {
        id
        title
        showViewings {
          startsAt
          title
        }
      }
    }
  `, {
    preview
  })

  return data.shows
}

export async function getShowById(id, preview) {
  const data = await fetchAPI(`
    query ShowById($id: ID!, $stage: Stage!) {
      show(stage: $stage, where: {id: $id}) {
        id
        title
        description
      }
    }
  `, {
    preview,
    variables: {
      stage: preview ? 'DRAFT' : 'PUBLISHED',
      id
    },
  })

  return data
}
