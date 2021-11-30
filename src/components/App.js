import '../styles/App.css';
import logo from '../img/logo.jpg'
import '../styles/Boards.css'
import { connect } from 'react-redux'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import UniqueBoard from './UniqueBoard';
import Main from './Main'
class App extends React.Component {


  render() {
    const { lists } = this.props
    return (
      <Router >
        <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className='Header' style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to='/boards'><img src={logo} alt="" width='300px' /></Link>
          </div>
        </div>
        <Routes>
          <Route exact path='/boards' element={<Main />} />
          <Route path='/boards/:name' element={<UniqueBoard items={lists} />} />
        </Routes>

      </Router >
    );
  }
}

//Передаем состояние 
const mapStateToProps = state => ({
  lists: state.Lists,
})

export default connect(mapStateToProps)(App);



