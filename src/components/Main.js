import React from 'react'
import '../styles/App.css';
import BoardList from './BoardList';
import '../styles/Boards.css'
import { connect } from 'react-redux'
import AddedForm from './AddedForm';


class Main extends React.Component {

    render() {
        const { lists } = this.props

        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <AddedForm items={lists} />
                <BoardList items={lists} />
            </div>
        )
    }

}

//Для передачи состояния компонентам
const mapStateToProps = state => ({
    lists: state.Lists,
})

export default connect(mapStateToProps)(Main);

