import React from 'react'
import '../styles/Card.css'
import AddCard from './AddCard';
import ElementList from './ElementList';
import { Droppable } from 'react-beautiful-dnd';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            border: '0',
            backgroundColor: color,
            height: 1,
            width: '90%',
        }}
    />
);

const Card = ({ lists, title, listId, boardId }) => {

    let text = []
    lists.map(list => {
        if (list.listID === Number(listId)) {
            ;
            list.lists.map(card => {
                text.push(card)
            });
        }
    })

    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
                    <h1>{title}</h1>
                    <ColoredLine color='black' />
                    {text.map((t, index) => <ElementList key={t.id} index={index} text={t.text} cardId={t.id} listId={listId} boardId={boardId} isCompleted={t.isCompleted} />)}
                    <AddCard listID={listId} boardId={boardId} />
                    {provided.placeholder}

                </div>
            )}

        </Droppable>
    )
}

export default Card
