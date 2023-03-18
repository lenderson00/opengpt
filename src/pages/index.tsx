import type { NextPage } from 'next'
import { LoginWithGoogle } from '../components/LoginWithGoogle'

const Login: NextPage = () => {
  return (
    <div className="flex">
      Login Page

      <LoginWithGoogle />
    </div>
  )
}

export default Login


