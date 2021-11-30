import React from 'react'
import '../styles/ElementList.css'
import { completeCard } from '../actions/cardsActions'
import { connect } from 'react-redux'

class ElementList extends React.Component {

    state = {
        isCompleted: Boolean(this.props.isCompleted),

    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick()
            , 0);
    }


    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            isCompleted: this.props.isCompleted
        })
    }

    render() {


        const { text, cardId, boardId, listId, dispatch } = this.props
        const el = document.getElementById(cardId.toString());
        const elText = document.getElementById(cardId.toString() + 'h');

        if (el && elText) {
            if (this.state.isCompleted) {
                // e.target.style.textDecoration = 'line-through'
                el.style.backgroundColor = 'rgba(241, 241, 241, 1)'
                elText.style.textDecoration = 'line-through'
            }
            else {
                el.style.backgroundColor = '#fff'
                elText.style.textDecoration = 'none'
            }
        }


        return (
            <div className='element' id={cardId.toString()} >
                <h5 id={cardId.toString() + 'h'}>{text}</h5>
                <h5 onClick={() => {
                    dispatch(completeCard(Number(boardId), listId, cardId))
                    // this.setState({ isCompleted: !isCompleted })
                    if (el && elText) {
                        if (this.state.isCompleted) {
                            // e.target.style.textDecoration = 'line-through'
                            el.style.backgroundColor = 'rgba(241, 241, 241, 1)'
                            elText.style.textDecoration = 'line-through'
                        }
                        else {
                            el.style.backgroundColor = '#fff'
                            elText.style.textDecoration = 'none'
                        };
                    }
                }}>🗸</h5>
            </div>
        )
    }
}

export default connect()(ElementList)
