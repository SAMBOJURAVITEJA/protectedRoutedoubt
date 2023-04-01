import './index.css'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <div className="logout-container">
    <Header />
    <h1>About Route</h1>
    <div className="buttons-container">
      <LogoutButton />
    </div>
  </div>
)

export default About
