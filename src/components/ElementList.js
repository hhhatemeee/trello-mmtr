import React from 'react'
import '../styles/ElementList.css'
import { completeCard } from '../actions/cardsActions'
import { connect } from 'react-redux'
import { Draggable } from "react-beautiful-dnd"



//Класс для каждого элемента из списка дел
class ElementList extends React.Component {

    state = {
        isCompleted: Boolean(this.props.isCompleted),

    }

    //3 функции нижние функции, отвечают за обновление состояние каждого элемента(чтобы отображать выполнен он или нет(зачеркнут или нет))
    //Метот костыльный, но для обещего понимания
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

        const { text, cardId, index, boardId, listId, dispatch } = this.props
        const el = document.getElementById(cardId.toString());
        const elText = document.getElementById(cardId.toString() + 'h');
        //Для отображения состояния каждого элемента(зачеркнут или нет)
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
            <Draggable draggableId={String(cardId)} index={index}>
                {provided => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
                    </div>

                )}

            </Draggable>
        )
    }
}

export default connect()(ElementList)
