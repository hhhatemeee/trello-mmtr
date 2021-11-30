import React from 'react'
import '../styles/Card.css'
import AddCard from './AddCard';
import ElementList from './ElementList';
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
        <div className='card'>
            <h1>{title}</h1>
            <ColoredLine color='black' />
            {text.map(t => <ElementList key={t.id} text={t.text} cardId={t.id} listId={listId} boardId={boardId} isCompleted={t.isCompleted} />)}
            <AddCard listID={listId} boardId={boardId} />
        </div>
    )
}

export default Card
