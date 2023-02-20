function updateUserRoute(body, params) {
  const { id } = params
  const { name, email, password } = body
  updateUserController({
    body: {
      name,
      email,
      password
    },
    params: {
      id
    }
  })
}

function updateUserController({ body, params }) {
  const { id } = params
  const { name, email, password } = body

  userRepository.update({
    body: { name, email, password },
    params: { id }
  })
}

const userRepository = {
  update: ({ body, params }) => {}
}
