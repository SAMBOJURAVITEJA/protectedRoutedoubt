import {Route} from 'react-router-dom'
import Cookies from 'js-cookie'
import Login from '../Login'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return <Route exact path="/login" component={Login} />
  }
  return <Route {...props} />
}
export default ProtectedRoute
