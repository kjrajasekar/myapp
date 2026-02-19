import { useContext } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import { FiArrowDownCircle } from "react-icons/fi";
import { usercontext } from './context/usercontext';
function Home(props){
    const user=useContext(usercontext)
    let mystyle={color:"red"}
    return (
        <Col xs={12} md={6} lg={3} className="box">
            <Container fluid className=''>
                <h1>name is {props.res.name}</h1>
            <h2 style={mystyle}>home element</h2>
            <p>context value {user}</p>
            <p className="text-center text-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci natus culpa ipsa id, sint architecto beatae iure ipsam aliquam, iste nostrum inventore in, sunt aliquid. Quae laborum explicabo deserunt.</p>
<FiArrowDownCircle  style={{fill:"red",height:"45px",width:"45px", stroke:"white"}} />
            </Container>
        </Col>
    )
}

export default Home;