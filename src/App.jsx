
import { Container, Row } from 'react-bootstrap'
import './App.css'
import Home from './Home'
import Sample from './Sample'
import About from './About'
import {usercontext} from './context/usercontext'
import Myreducer from './Myreducer'
function App() {
 let location="coimbatore"

  return (
    <div className='main'>
      <Myreducer />
    <h2>Main Component</h2>
    <usercontext.Provider  value={location}>

    <About />
    </usercontext.Provider>
    <Sample res={location} />
    <Container>
      <Row>
 {/* <Home />
     <Home />
     <Home /> */}
      </Row>
    </Container>
    
    </div>
  )
}

export default App
