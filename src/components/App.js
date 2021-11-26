import '../styles/App.css';
import logo from '../img/logo.jpg'
import BoardList from './BoardList';
import Board from './BoardItem';
import '../styles/Boards.css'
import { connect } from 'react-redux'
import React from 'react';
import AddedForm from './AddedForm';


class App extends React.Component {
  render() {

    const { lists } = this.props
    return (
      <div className="App" >
        <div className='Header'>
          <img src={logo} alt="" width='300px' />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <AddedForm />
          <BoardList items={lists} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.Lists
})

export default connect(mapStateToProps)(App);
