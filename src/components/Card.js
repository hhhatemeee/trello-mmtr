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

const Card = ({ listsEl, title, listId, boardId }) => {

    let elements = []
    //Принимаем списки и вытаскиваем в новый массив все элементы принадлежащие конкретному списку 
    listsEl.map(list => {
        if (list.listID === Number(listId)) {
            ;
            list.lists.map(el => {
                elements.push(el)
            });
        }
    })

    return (
        <Droppable droppableId={String(listId)}>
            {provided => (
                <div className='card' {...provided.droppableProps} ref={provided.innerRef}>
                    <div>
                        <h1>{title}</h1>
                        <ColoredLine color='black' />
                        {elements.map((el, index) => <ElementList key={el.id} index={index} text={el.text} cardId={el.id} listId={listId} boardId={boardId} isCompleted={el.isCompleted} />)}
                    </div>
                    {provided.placeholder}
                    <AddCard listID={listId} boardId={boardId} />
                </div>
            )}

        </Droppable>
    )
}

export default Card
