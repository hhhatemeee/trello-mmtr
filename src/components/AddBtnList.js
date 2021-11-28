import React from 'react'
import { addList } from '../actions/boardActions';
import { connect } from 'react-redux';
import UniqueBoard from './UniqueBoard';

class AddBtnList extends React.Component {
    state = {
        title: ''
    }
    handleInputChange = (e) => {
        // const input = document.querySelector('.add-form-hide-input')
        this.setState({
            title: e.target.value,
        })
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
    enterDown = (e) => {
        if (e.keyCode === 13) {
            this.handleAddList();
            console.log(this.state.title);
        }
    }
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <form className='form' action="">
                    <input className='add-input'
                        type="text"
                        onChange={this.handleInputChange}
                        onKeyDown={(e) => this.enterDown(e)}
                    />
                    <h4 style={{ margin: '0' }} >+</h4>
                    <button onClick={this.handleAddList}>12312</button>
                </form>
            </div >
        )
    }
}

export default connect()(AddBtnList)
