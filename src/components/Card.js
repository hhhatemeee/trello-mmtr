import React from 'react'
import '../styles/Card.css'
import AddCard from './AddCard';
import Element from './Element';
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
    console.log(listId);
    console.log(lists);
    let text = []
    console.log(text);
    return (
        <div className='card'>
            <h1>{title}</h1>
            <ColoredLine color='black' />
            {lists.map(list => {
                if (list.listID == listId) {
                    ;
                    list.lists.map(card => {
                        text.push(card)
                    });
                }
            })}
            {text.map(t => <ElementList text={t.text} />)}
            <AddCard listID={listId} />
        </div>
    )
}

export default Card
