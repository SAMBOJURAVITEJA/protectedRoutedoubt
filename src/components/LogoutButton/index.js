import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const deleting = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <button onClick={deleting} type="button">
      Logout
    </button>
  )
}
export default withRouter(LogoutButton)
