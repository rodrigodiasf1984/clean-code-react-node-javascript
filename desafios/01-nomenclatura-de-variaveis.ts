// Nomenclatura de variáveis

const categories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50
  },
  {
    title: 'Famous',
    followers: 500
  },
  {
    title: 'Super Star',
    followers: 1000
  }
]

export default async function getUserAndCategoryFromGitHub(
  request: {
    query: {
      username: string
    }
  },
  response: { status?: any }
) {
  const userName = String(request.query.username)

  if (!userName) {
    return response.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const userInfo = await fetch(`https://api.github.com/users/${userName}`)

  if (userInfo.status === 404) {
    return response.status(400).json({
      message: `User with username "${userName}" not found`
    })
  }

  const user = await userInfo.json()

  const orderedCategoriesByFollowers = categories.sort(
    (categoryA, categoryB) => categoryB.followers - categoryA.followers
  )

  const findCategoryByUser = orderedCategoriesByFollowers.find(
    (category) => user.followers > category.followers
  )

  const userNameAndCategory = {
    userName,
    category: findCategoryByUser.title
  }

  return userNameAndCategory
}

getUserAndCategoryFromGitHub(
  {
    query: {
      username: 'josepholiveira'
    }
  },
  {}
)
