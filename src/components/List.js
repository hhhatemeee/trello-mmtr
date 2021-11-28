import React from 'react'
import Card from './Card';
const List = ({ boards, boardId }) => {
    let names = [];
    return (
        <div>
            {boards.map(board => {
                if (board.id == boardId) {
                    board.lists.map(card => {
                        names.push(card.title)
                    });
                }
            })}
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {names.map(name => <Card title={name} />)}
            </div>
        </div>
    )
}

export default List
