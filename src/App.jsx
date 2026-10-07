
import { Container, Row } from 'react-bootstrap'
import './App.css'
import Home from './Home'
import Sample from './Sample'
import About from './About'
import {usercontext} from './context/usercontext'
import Myreducer from './Myreducer'
import Myredux from './Myredux'
import { useSelector } from 'react-redux'
import Products from './Products'
import { Link, Route, Routes } from 'react-router-dom'
function App() {
 let location="coimbatore"
//  const data=useSelector(state=> state.counter)

  return (
    <div className='main'>
     
    <h2>Main Component </h2>

    <Link to="/">Home</Link>
    <Link to="/serv">Service</Link>
    <Link to="/about">About</Link>
    <Link to="/con">Contact</Link>

<div>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/serv/" element={<Myreducer />} >
      <Route path="comp1" index element={<About />} />
      <Route path="comp2" element={<Sample />} />

    </Route>
    <Route path="/con" element={<Products />} />
    <Route path="/con/:pid/:model" element={<Products />} />
  </Routes>
</div>
    
    </div>
  )
}

export default App
