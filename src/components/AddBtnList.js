import React from 'react'
import { addList } from '../actions/boardActions';
import { connect } from 'react-redux';

import '../styles/AddBtnList.css'

class AddBtnList extends React.Component {
    state = {
        title: '',
        formOpen: true,
    }
    handleInputChange = (e) => {
        this.setState({
            title: e.target.value,
        })

    }
    handleAddList = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { title } = this.state
        const id = (this.props.id).slice(this.props.id.indexOf('_', 1) + 1)
        if (title) {
            dispatch(addList(Number(id), title))
            this.setState({
                title: '',
            })
        }

    }
    addListBtn = (e) => {
        e.preventDefault()
        this.state.formOpen ? this.setState({ formOpen: false }) : this.setState({ formOpen: true })
    }
    RenderInputAdd() {

        return (
            <div className='add-list-form' style={{ display: 'flex', alignItems: 'center' }}>
                <input className='add-input'
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.title}
                    onBlur={this.addListBtn}
                />
                <h4 style={{ margin: '0' }}
                    onClick={this.addListBtn} >+</h4>
                <button
                    onClick={this.handleAddList}></button>
            </div>

        )
    }
    render() {
        return (
            <div className='add-list' >
                <form className='form' action="" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {this.state.formOpen ? <h3 onClick={this.addListBtn}>Добавить список </h3> : this.RenderInputAdd()}
                </form>
            </div >
        )
    }
}

export default connect()(AddBtnList)
