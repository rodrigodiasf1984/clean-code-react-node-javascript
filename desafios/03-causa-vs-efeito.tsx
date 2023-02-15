// Causa vs Efeito
import { useEffect, useState } from 'react'

interface User {
  name: string
  github: string
}

function getUserFromGitHub() {
  return {
    data: {
      user: {
        name: 'Joseph Oliveira',
        github: 'https://github.com/josepholiveira'
      }
    }
  }
}

export function UserProfile() {
  const [isGettingUserInfo, setIsGettingUserInfo] = useState(false)
  const [user, setUser] = useState<User>()

  useEffect(() => {
    function getUserInfo() {
      setIsGettingUserInfo(true)

      const userInfo = getUserFromGitHub()

      setUser(userInfo.data.user)

      setIsGettingUserInfo(false)
    }

    getUserInfo()
  })

  if (isGettingUserInfo) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <img src={`${user?.github}.png`} alt='' />
      <a href={user?.github}>{user?.name}</a>
    </div>
  )
}
