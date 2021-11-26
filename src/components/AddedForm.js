import React from 'react'
import '../styles/AddedForm.css'
class AddedForm extends React.Component {

    state = {
        formOpen: false,
        text: '',
    }

    hideForm = (e) => {
        this.state.formOpen ? this.setState({ formOpen: false }) : this.setState({ formOpen: true })
        const form = document.querySelector('.add-form')
        e.preventDefault()
    }
    renderDeleteForm = () => {
        return (
            <div className='delete-form'>
                <a href=""><h3>+</h3></a>
            </div>
        )
    }
    renderAddButton = () => {
        const { list } = this.props;

        return (
            <button className="ui positive basic button add-form-hide-btn">Добавить</button>
        )
    }
    handleInputChange = (e) => {
        this.setState({
            text: e.target.value,
        })

    }

    renderAddedForm = () => {
        return (
            <div className='add-form-hide '>
                <form action="">
                    <label for="" > Название доски</label>
                    <input type="text"
                        placeholder='Моя доска'
                        value={this.state.text}
                        onChange={this.handleInputChange} />
                    <div style={{ marginTop: '10%' }}>
                        <button className="ui secondary basic button">Отмена</button>
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

export default AddedForm
