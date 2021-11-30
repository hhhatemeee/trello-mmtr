import React from 'react'
import '../styles/AddedForm.css'
import { connect } from 'react-redux'
import { addBoard } from '../actions'



class AddedForm extends React.Component {

    state = {
        formOpen: false,
        text: '',
    }

    hideForm = (e) => {
        const form = document.querySelector('.add-form')
        this.state.formOpen ? this.setState({ formOpen: false }) : this.setState({ formOpen: true })
        this.state.formOpen ? form.style.boxShadow = '0px 4px 8px -1px rgba(34, 60, 80, 0.2)' : form.style.boxShadow = '0px 0px 8px -1px rgba(34, 60, 80, 0.2)'
        e.preventDefault()
    }
    renderDeleteForm = () => {
        return (
            <div className='delete-form'>
                <h3 onClick={this.hideForm}>+</h3>
            </div>
        )
    }

    renderAddButton = () => {

        return (
            <button className="ui positive basic button add-form-hide-btn" onClick={this.handleAddBoard} >Добавить</button>
        )
    }
    handleInputChange = (e) => {
        const input = document.querySelector('.add-form-hide-input')
        this.setState({
            text: e.target.value,
        })
        input.style.border = '1px solid gray'
    }
    handleAddBoard = (e) => {
        e.preventDefault();
        const input = document.querySelector('.add-form-hide-input')
        const { dispatch } = this.props
        const { text } = this.state
        // console.log(text);


        if (text) {
            dispatch(addBoard(text))
            this.setState({
                text: ''
            })
        }
        input.style.border = '1px solid red'
        input.placeholder = 'Поле не может быть пустым'
        return;
    }

    renderAddedForm = () => {
        return (
            <div className='add-form-hide'>
                <form action="">
                    <label htmlFor="" > Название доски</label>
                    <input type="text"
                        className='add-form-hide-input'
                        placeholder='Моя доска'
                        value={this.state.text}
                        onChange={this.handleInputChange} />
                    <div style={{ marginTop: '10%' }}>
                        <button className="ui secondary basic button"
                            onClick={this.hideForm}>Отмена</button>
                        <this.renderAddButton />
                    </div>
                </form>
            </div>
        )
    }

    render() {
        console.log(this.props.items.find(board => 0 === board.id).lists.find(list => list.listID === 0))

        return (
            <div className='add'>
                <form action="" className="add-form">
                    <button className='add-btn' onClick={this.hideForm} >+</button>
                    <h3 onClick={this.hideForm}>Новая доска</h3>
                    {this.state.formOpen ? this.renderDeleteForm() : false}

                </form>
                {this.state.formOpen ? this.renderAddedForm() : false}
            </div>
        )
    }
}

export default connect()(AddedForm)
