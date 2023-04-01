import './index.css'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

const Home = () => (
  <div className="logout-container">
    <Header />
    <h1>Home Route</h1>
    <div className="buttons-container">
      <LogoutButton />
    </div>
  </div>
)

export default Home
