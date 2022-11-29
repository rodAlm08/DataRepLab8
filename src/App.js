import React from 'react';
import './App.css';


import {Read} from './components/read';//importing read module
import { Create } from './components/create';
import {Home} from './components/home';
import { Edit } from './components/edit';

//imports to be used in the navigation bar
//bootstrap has a big library of buttons/nav bars, etc
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//importing routing to the application. It will allow to change the url
import {
  BrowserRouter as Router,
  Route,
  Routes 
} from "react-router-dom";



class App extends React.Component {
  render() {//render is what will displayed 

    return (
      //include router encapsulate the lot inside Router
      //adding the navigation bar inside div    
      
      <Router>

        <div className="App">

      {/* the nav bar changes the url for the application*/}
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/"></Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/read">Read</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
            </Container>
          </Navbar>

      {/* Routes is where we are going to show a different component*/}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/read' element={<Read />}></Route>
            <Route path='/create' element={<Create />}></Route>
            <Route path='/edit/:id' element={<Edit></Edit>}></Route> 
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
