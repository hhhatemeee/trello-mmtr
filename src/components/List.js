import React from 'react'
import Card from './Card';
import { Droppable } from 'react-beautiful-dnd';
const List = ({ boards, boardId }) => {
    let names = [];
    return (
        <div>
            {boards.map(board => {
                if (board.id == boardId) {
                    board.lists.map(card => {
                        names.push(card)

                    });
                }
            })}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {/* {names.map(name => <Droppable droppableId={String(name.listID)}>
                    {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <Card
                                lists={names} boardId={boardId} listId={name.listID} key={name.listID} title={name.title} />
                            {provided.placeholder}
                        </div>

                    )}
                </Droppable>)} */}
                {names.map(name =>
                    <Card lists={names} boardId={boardId} listId={name.listID} key={name.listID} title={name.title} />)}
            </div>
        </div>

    )
}

export default List
