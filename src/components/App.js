import '../styles/App.css';
import logo from '../img/logo.jpg'
import BoardList from './BoardList';
import Board from './BoardItem';
import '../styles/Boards.css'
import { connect } from 'react-redux'
import React from 'react';
import AddedForm from './AddedForm';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import UniqueBoard from './UniqueBoard';
import Main from './Main'
class App extends React.Component {


  render() {

    return (
      <Router>
        <div className="App" >
          <div className='Header' style={{ textAlign: 'center' }}>
            <Link to='/boards'><img src={logo} alt="" width='300px' /></Link>
          </div>

        </div>
        <Routes>
          <Route exact path='/boards' element={<Main />} />
          <Route path='/boards/:name' element={<UniqueBoard />} />
        </Routes>

      </Router >
    );
  }
}



export default App
