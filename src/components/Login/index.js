import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Login = props => {
  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  const onButton = async () => {
    const {history} = props

    const options = {
      method: 'POST',
      body: JSON.stringify({username: 'rahul', password: 'rahul@2021'}),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    }
  }

  return (
    <div className="bg-container">
      <h1>Please Login</h1>
      <div className="buttons-container">
        <button type="button" onClick={onButton}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}

export default Login
