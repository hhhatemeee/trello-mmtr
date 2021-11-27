import React from 'react'
import '../styles/App.css';
import BoardList from './BoardList';
import Board from './BoardItem';
import '../styles/Boards.css'
import { connect } from 'react-redux'
import AddedForm from './AddedForm';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

class Main extends React.Component {

    render() {
        const { lists } = this.props

        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <AddedForm />
                <BoardList items={lists} />
            </div>
        )
    }

}


const mapStateToProps = state => ({
    lists: state.Lists,
})

export default connect(mapStateToProps)(Main);

