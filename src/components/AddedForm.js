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
                <a href="" onClick={this.hideForm}><h3>+</h3></a>
            </div>
        )
    }
    renderAddButton = () => {
        const { list } = this.props;

        return (
            <button className="ui positive basic button add-form-hide-btn" onClick={this.handleAddBoard} >Добавить</button>
        )
    }
    handleInputChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }
    handleAddBoard = (e) => {
        e.preventDefault();
        const { dispatch } = this.props
        const { text } = this.state
        console.log(text);


        if (text) {
            dispatch(addBoard(text))
            this.setState({
                text: ''
            })
        }

        return;
    }

    renderAddedForm = () => {
        return (
            <div className='add-form-hide'>
                <form action="">
                    <label for="" > Название доски</label>
                    <input type="text"
                        placeholder='Моя доска'
                        value={this.state.text}
                        onChange={this.handleInputChange} />
                    <div style={{ marginTop: '10%' }}>
                        <button className="ui secondary basic button"
                            onClick={this.hideForm}>Отмена</button>
                        {this.renderAddButton()}
                    </div>
                </form>
            </div>
        )
    }

    render() {
        return (
            <div className='add'>
                <form action="" className="add-form">
                    <button className='add-btn' onClick={this.hideForm} >+</button>
                    <a href="" onClick={this.hideForm}><h3>Новая доска</h3></a>
                    {this.state.formOpen ? this.renderDeleteForm() : console.log('Форма скрыта')}

                </form>
                {this.state.formOpen ? this.renderAddedForm() : console.log('Форма скрыта')}
            </div>
        )
    }
}

export default connect()(AddedForm)
