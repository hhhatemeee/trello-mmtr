import React from 'react'
import { addList } from '../actions/boardActions';
import { connect } from 'react-redux';
import UniqueBoard from './UniqueBoard';
import '../styles/AddBtnList.css'

class AddBtnList extends React.Component {
    state = {
        title: '',
        formOpen: true,
    }
    handleInputChange = (e) => {
        // const input = document.querySelector('.add-form-hide-input')
        this.setState({
            title: e.target.value,
        })
        console.log(e.target.value);

        // input.style.border = '1px solid gray'
    }
    handleAddList = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { title } = this.state
        const id = (this.props.id).slice(this.props.id.indexOf('_', 1) + 1)
        console.log(id);
        if (title) {
            dispatch(addList(Number(id), title))
        }

    }
    addListBtn = (e) => {
        e.preventDefault()
        this.state.formOpen ? this.setState({ formOpen: false }) : this.setState({ formOpen: true })
        console.log(this.state.formOpen);
    }
    enterDown = (e) => {
        // if (e.keyCode === 13) {
        //     this.handleAddList();
        //     console.log(this.state.title);
        // }
    }
    RenderInputAdd() {
        console.log(this.state.formOpen);

        return (
            <div className='add-list-form' style={{ display: 'flex', alignItems: 'center' }}>
                <input className='add-input'
                    type="text"
                    onChange={this.handleInputChange}
                    onKeyDown={(e) => this.enterDown(e)}
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
