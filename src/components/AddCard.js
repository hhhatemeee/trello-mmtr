import React from 'react'
import '../styles/AddCard.css'
import { connect } from 'react-redux';
import { addCard } from '../actions/cardsActions';

class AddCard extends React.Component {
    state = {
        text: '',
        formOpen: false
    }
    handleInputChange = (e) => {
        // const input = document.querySelector('.add-form-hide-input')
        this.setState({
            text: e.target.value,
        })

    }
    handleAddCard = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { text } = this.state
        const listId = (this.props.listID)
        const boardId = this.props.boardId
        if (text) {
            dispatch(addCard(Number(boardId), Number(listId), text))
            this.setState({
                text: ''
            })
        }

    }
    renderAddBtn = () => {
        return (
            <button onClick={this.handleAddCard}></button>
        )
    }
    addCardBtn = (e) => {
        e.preventDefault()
        this.state.formOpen ? this.setState({ formOpen: false }) : this.setState({ formOpen: true })
        // console.log(this.state.formOpen);
    }
    RenderInput = () => {
        return (
            <div className='add-card' >
                <input className='add-card-input' type="text"
                    onChange={this.handleInputChange}
                    value={this.state.text} />
                <h4 onClick={this.addCardBtn}>+</h4>
                <this.renderAddBtn />
            </div>
        )
    }


    render() {


        return (
            <div>
                <form action="" className='form-add-card' >
                    {this.state.formOpen ? <this.RenderInput /> : <h4 onClick={this.addCardBtn}>Добавить дело...</h4>}
                </form>
            </div>
        )
    }
}

export default connect()(AddCard)
