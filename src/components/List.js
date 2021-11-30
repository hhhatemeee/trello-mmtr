import React from 'react'
import Card from './Card';
const List = ({ boards, boardId }) => {

    let listsElements = [];
    //Принимаем доски из пропсов и создаем новый массив с принаджежащими списками для доски
    boards.map(board => {
        if (board.id === Number(boardId)) {
            board.lists.map(list => {
                listsElements.push(list)

            });
        }
    })

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {listsElements.map(list =>
                    // передаем в пропсы список карточек
                    <Card listsEl={listsElements} boardId={boardId} listId={list.listID} key={list.listID} title={list.title} />)}
            </div>
        </div>

    )
}

export default List
