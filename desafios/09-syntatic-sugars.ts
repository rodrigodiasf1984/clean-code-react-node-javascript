function getFirstFiveRatings(ratings) {
  if (ratings.length < 5) {
    return false
  }
  return ratings.slice(0, 5)
}

function sumFirstFiveRatings(ratings) {
  const ratingsBool = Boolean(ratings)

  if (ratingsBool) {
    const firstFiveRatings = getFirstFiveRatings(ratings)

    if (!firstFiveRatings) return { error: 'there must be at least 5 ratings' }

    let ratingsSum = 0

    for (const rating of firstFiveRatings) {
      ratingsSum += Number(rating)
    }

    return { ratingsSum, created_at: new Date().getMilliseconds() } // convertendo para milisegundos para salvar no banco de dados como timestamp
  }

  return { error: 'ratings is required' }
}

const appRatings = ['5', '3', '4', '4', '5', '1', '5', '4', '4', '3']
sumFirstFiveRatings(appRatings)
